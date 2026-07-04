import Image from "next/image";

export default function Hero() {
    return (
        <section>
            <div className="flex gap-8">
                <div>
                    <Image className="rounded-full" src="/images/profile-picture.png" alt="Profile Picture" width={400} height={400} />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Dan Nguyen</h1>

                    <div className="mt-4 space-y-4">
                        <p>Web developer for small businesses. Helping visitors become customers with websites and web apps that don’t just look good — they solve real business problems.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
