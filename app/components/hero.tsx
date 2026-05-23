import Image from "next/image";

export default function Hero() {
    return (
        <section>
            <div className="flex gap-8">
                <div>
                    <Image className="rounded-full" src="/images/profile-picture.webp" alt="Profile Picture" width={600} height={600} />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Dantegro</h1>

                    <div className="mt-4 space-y-4">
                        <p>Hello — I'm Dan. I'm a full-stack web developer building modern websites and web apps.
                        </p>
                        <p>Small businesses deserve better websites and a stronger online presence.</p>
                        <p>That's why I build them. Websites that are cleaner, more secure, and built to attract more customers and help you succeed online.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
