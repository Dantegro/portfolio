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
                        <p>I build websites and web apps for small businesses that don’t just look good — they help turn visitors into customers and power real business operations.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
