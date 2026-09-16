

export const metadata = {
title: "Helpful Resources | ORSERDU® (elacestrant)",
description: "Find useful patient information to help you understand more about ORSERDU® and why it may be the right treatment option for you.",
keywords: "ORSERDU resources, patient information, ESR1m breast cancer treatment, elacestrant support materials, mBC educational resources",
authors: [{ name: "ORSERDU® (elacestrant)" }],
robots: "index, follow",
openGraph: {
title: "Helpful Resources | ORSERDU® (elacestrant)",
description: "Find useful patient information to help you understand more about ORSERDU® and why it may be the right treatment option for you.",
url: "https://www.orserdu.com/helpful-resources",
images: [
{
url: "https://www.orserdu.com/images/logos/orserdu-logo.png"
}
],
type: "website"
},
twitter: {
card: "summary_large_image",
title: "Helpful Resources | ORSERDU® (elacestrant)",
description: "Find useful patient information to help you understand more about ORSERDU® and why it may be the right treatment option for you.",
images: ["https://www.orserdu.com/images/logos/orserdu-logo.png"]
},
alternates: {
canonical: "https://www.orserdu.com/helpful-resources/"
}
};
export default function HelpfulResourcesPage({children}) {
    return (
        <>
        {children}
        </>
    )
}