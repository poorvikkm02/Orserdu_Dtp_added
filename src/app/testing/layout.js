export const metadata = {
title: "ESR1m testing | ORSERDU® (elacestrant)",
description: "Read how ORSERDU™, an estrogen blocking therapy, works against ESR1-mutated mBC to help people live two times longer without cancer spread.",
keywords: "ORSERDU testing, ESR1-mutated mBC, elacestrant, estrogen blocking therapy, metastatic breast cancer treatment, breast cancer survival",
authors: [{ name: "ORSERDU® (elacestrant)" }],
robots: "index, follow",
openGraph: {
title: "ESR1m testing | ORSERDU® (elacestrant)",
description: "Read how ORSERDU™, an estrogen blocking therapy, works against ESR1-mutated mBC to help people live two times longer without cancer spread.",
url: "https://www.orserdu.com/testing/",
images: [
{
url: "https://www.orserdu.com/images/logos/orserdu-logo.png"
}
],
type: "website"
},
twitter: {
card: "summary_large_image",
title: "ESR1m testing | ORSERDU® (elacestrant)",
description: "Read how ORSERDU™, an estrogen blocking therapy, works against ESR1-mutated mBC to help people live two times longer without cancer spread.",
images: ["https://www.orserdu.com/images/logos/orserdu-logo.png"]
},
alternates: {
canonical: "https://www.orserdu.com/testing/"
}
};

export default function TestingLayout({children}){
    return (
        <>
        {children}
        </>
    )
}
