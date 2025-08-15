import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

const Layout = async ({ children }: { children: React.ReactNode }) => {
    const t = await getTranslations();
    return (
        <div>
            <div className="logoContainer" >
                <Link href="/" >
                    <Image
                        src="/nesto-EN_Secondary.png"
                        alt={t('alt.nestoMortgages')}
                        width={378 / 2}
                        height={105.5 / 2}
                    />
                </Link>
            </div>
            {children}
        </div>
    );
}

export default Layout;