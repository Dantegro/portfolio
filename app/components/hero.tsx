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
                    <p className="mt-5">Hello - I'm Datengro, a full-stack web developer building modern websites and web apps for small businesses.
                    </p>
                </div>
            </div>

        </section>
    )
}
