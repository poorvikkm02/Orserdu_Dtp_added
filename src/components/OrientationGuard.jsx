"use client"

import usePreLoader from "@/hooks/usePreloader";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import PreLoader from "./loaders/Preloader"

export default function OrientationGuard() {
    const loading = usePreLoader();
    const [blockDevice, setBlockDevice] = useState(false);
    const [showRotateMessage, setShowRotateMessage] = useState(false);
    const [deviceType, setDeviceType] = useState("desktop");

    const pathname = usePathname();
    const searchParams = useSearchParams();

    const isPatientZeroRoute = pathname === "/real-stories" && searchParams.has("videoId");

    const checkDeviceAndOrientation = () => {
        const width = window.innerWidth;
        const isPortrait = window.matchMedia("(orientation: portrait)").matches;

        if (isPatientZeroRoute) {
            if (width > 850 && isPortrait) {
                setBlockDevice(true);
                setShowRotateMessage(false);
                return;
            }
            setBlockDevice(false);
            setShowRotateMessage(false);
            return;
        }

        // Block unsupported range: 767px–1023px
        if (width >= 767 && width <= 1023) {
            setBlockDevice(true);
            setShowRotateMessage(false);
            return;
        } else {
            setBlockDevice(false); // allow everything else
        }

        let type = "desktop";
        if (width < 767) {
            type = "mobile";
        } else if (width > 1023 && width <= 1100) {
            type = "tablet";
        }

        setDeviceType(type);

        // Show rotate message conditionally
        if (type === "mobile") {
            setShowRotateMessage(!isPortrait); // portrait only
        } else if (type === "tablet") {
            setShowRotateMessage(isPortrait); // landscape only
        } else {
            setShowRotateMessage(false);
        }
    };

    useEffect(() => {
        checkDeviceAndOrientation();
        window.addEventListener("resize", checkDeviceAndOrientation);
        window.addEventListener("orientationchange", checkDeviceAndOrientation);
        return () => {
            window.removeEventListener("resize", checkDeviceAndOrientation);
            window.removeEventListener("orientationchange", checkDeviceAndOrientation);
        };
    }, [pathname, searchParams]);

    if (loading) {
        return (
            <div className="w-full h-full fixed z-[1000000000] bg-white">
                <PreLoader />
            </div>
        );
    }

    if (blockDevice) {
        return (
            <div className="fixed inset-0 bg-light_mint_green z-[9999] flex flex-col items-center justify-center text-black text-center p-5">
                <p className="text-xl font-thin mb-4">
                    Please rotate your device
                </p>
            </div>
        );
    }

    if (showRotateMessage) {
        return (
            <div className="fixed inset-0 bg-light_mint_green z-[9999] flex flex-col items-center justify-center text-black text-center p-5">
                <p className="text-xl font-thin mb-4">
                    Please rotate your device
                </p>
            </div>
        );
    }

    return null;
}