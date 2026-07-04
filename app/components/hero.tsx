import Image from "next/image";

export default function Hero() {
    return (
        <section>
            <div className="flex gap-8">
                <div>
                    <Image className="rounded-full" src="/images/profile-picture.png" alt="Profile Picture" width={400} height={400} />
                </div>
                <div>
                <p className="mb-3 text-sm font-medium text-white/60">
    Dan Nguyen
</p>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Websites and web apps for small businesses</h1>

                    <div className="mt-4 space-y-4">
                        <p>I build websites and web apps for small businesses that don’t just look good — they help turn visitors into customers and power real business operations.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
