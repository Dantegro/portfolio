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
                        <p> Hi, I'm Dan. I build and redesign full-stack websites and web apps for small businesses.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
