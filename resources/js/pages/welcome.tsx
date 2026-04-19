import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { login, register } from '@/routes';

interface Jersey {
    id: number;
    name: string;
    league: string;
    price: number;
    image: string;
}

const featuredJerseys: Jersey[] = [
    {
        id: 1,
        name: 'Manchester United Home 24/25',
        league: 'Premier League',
        price: 89.99,
        image: 'MU',
    },
    {
        id: 2,
        name: 'Real Madrid Home 24/25',
        league: 'La Liga',
        price: 94.99,
        image: 'RM',
    },
    {
        id: 3,
        name: 'Barcelona Home 24/25',
        league: 'La Liga',
        price: 89.99,
        image: 'BAR',
    },
    {
        id: 4,
        name: 'Bayern Munich Home 24/25',
        league: 'Bundesliga',
        price: 84.99,
        image: 'BAY',
    },
    {
        id: 5,
        name: 'PSG Home 24/25',
        league: 'Ligue 1',
        price: 79.99,
        image: 'PSG',
    },
    {
        id: 6,
        name: 'Inter Milan Home 24/25',
        league: 'Serie A',
        price: 89.99,
        image: 'INT',
    },
];

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Jersify - Premium Football Jerseys" />
            <div className="min-h-screen bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
                {/* Header */}
                <header className="border-b border-[#e3e3e0] bg-white px-6 py-4 dark:border-[#3E3E3A] dark:bg-[#161615]">
                    <div className="mx-auto flex max-w-7xl items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-[#f53003] dark:text-[#FF4433]">
                                J
                            </span>
                            <span className="text-xl font-semibold">
                                Jersify
                            </span>
                        </Link>
                        <nav className="hidden items-center gap-6 md:flex">
                            <Link
                                href="/"
                                className="text-sm font-medium hover:text-[#f53003]"
                            >
                                Home
                            </Link>
                            <Link
                                href="/"
                                className="text-sm text-muted-foreground hover:text-[#f53003]"
                            >
                                Shop
                            </Link>
                            <Link
                                href="/"
                                className="text-sm text-muted-foreground hover:text-[#f53003]"
                            >
                                Teams
                            </Link>
                            <Link
                                href="/"
                                className="text-sm text-muted-foreground hover:text-[#f53003]"
                            >
                                About
                            </Link>
                        </nav>
                        <div className="flex items-center gap-4">
                            {auth.user ? (
                                <Link
                                    href="/dashboard"
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                    >
                                        Log in
                                    </Link>
                                    {canRegister && (
                                        <Link
                                            href={register()}
                                            className="inline-block rounded-sm border border-[#19140035] bg-[#f53003] px-5 py-1.5 text-sm leading-normal text-white hover:border-[#1915014a] hover:bg-[#e42d03] dark:border-[#3E3E3A] dark:bg-[#FF4433] dark:hover:bg-[#e42d03]"
                                        >
                                            Register
                                        </Link>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="bg-gradient-to-r from-[#f53003] to-[#ff6b35] px-6 py-20 text-white dark:from-[#CC2903] dark:to-[#e42d03]">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
                        <div className="space-y-6">
                            <h1 className="text-4xl leading-tight font-bold md:text-6xl">
                                Wear Your Team Pride
                            </h1>
                            <p className="text-lg text-white/90 md:text-xl">
                                Get authentic football jerseys from the world's
                                top leagues. Official licensing, premium
                                quality.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-white text-[#f53003] hover:bg-gray-100"
                                >
                                    <Link href="/">Shop Now</Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-[#f53003]"
                                >
                                    <Link href="/">Learn More</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative h-64 w-64 rounded-full bg-white/10 p-8 md:h-80 md:w-80">
                                <div className="flex h-full items-center justify-center">
                                    <span className="text-6xl font-bold md:text-8xl">
                                        ⚽
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Football Jerseys Grid */}
                <section className="border-b border-[#e3e3e0] bg-white py-16 dark:border-[#3E3E3A] dark:bg-[#161615]">
                    <div className="">
                        <div className="mb-5 grid grid-cols-1 gap-6 pb-10 lg:grid-cols-2 lg:items-start">
                            <h2 className="text-center text-5xl font-black tracking-tight text-[#1b1b18] dark:text-[#EDEDEC]">
                                Football Jerseys Sri Lanka – Premium Club &
                                National Kits
                            </h2>
                            <p className="text-md leading-relaxed text-muted-foreground">
                                Looking to upgrade your collection of football
                                jerseys sri lanka with premium quality? Fusion
                                Gear offers authentic club and national team
                                jerseys, lifestyle kits, training gear, and
                                accessories – imported and delivered islandwide
                                within 15–20 days. Whether you're supporting
                                your favourite club or collecting the latest
                                editions, our curated collections guarantee
                                accuracy, comfort, and durability.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
                            <Link
                                href="/"
                                className="group relative block aspect-square overflow-hidden bg-[#f5f5f5] dark:bg-[#1D1D1D]"
                            >
                                <img
                                    src="/images/jersey.jpg"
                                    alt="Football Jerseys"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent pt-20 pb-6 transition-opacity duration-300 group-hover:from-[#f53003]/80">
                                    <span className="text-2xl font-bold tracking-wider text-white uppercase">
                                        Jerseys
                                    </span>
                                    <span className="mt-1 text-xs text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        Official Kits
                                    </span>
                                </div>
                            </Link>
                            <Link
                                href="/"
                                className="group relative block aspect-square overflow-hidden bg-[#f5f5f5] dark:bg-[#1D1D1D]"
                            >
                                <img
                                    src="/images/track suits 2.jpg"
                                    alt="Tracksuits"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent pt-20 pb-6 transition-opacity duration-300 group-hover:from-[#f53003]/80">
                                    <span className="text-2xl font-bold tracking-wider text-white uppercase">
                                        Tracksuits
                                    </span>
                                    <span className="mt-1 text-xs text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        Training Gear
                                    </span>
                                </div>
                            </Link>
                            <Link
                                href="/"
                                className="group relative block aspect-square overflow-hidden bg-[#f5f5f5] dark:bg-[#1D1D1D]"
                            >
                                <img
                                    src="/images/retro.jpg"
                                    alt="Retro Jerseys"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent pt-20 pb-6 transition-opacity duration-300 group-hover:from-[#f53003]/80">
                                    <span className="text-2xl font-bold tracking-wider text-white uppercase">
                                        Retro
                                    </span>
                                    <span className="mt-1 text-xs text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        Vintage Classics
                                    </span>
                                </div>
                            </Link>
                            <Link
                                href="/"
                                className="group relative block aspect-square overflow-hidden bg-[#f5f5f5] dark:bg-[#1D1D1D]"
                            >
                                <img
                                    src="/images/hoodies.jpg"
                                    alt="Hoodies"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent pt-20 pb-6 transition-opacity duration-300 group-hover:from-[#f53003]/80">
                                    <span className="text-2xl font-bold tracking-wider text-white uppercase">
                                        Hoodies
                                    </span>
                                    <span className="mt-1 text-xs text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        Casual Wear
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                <section className="bg-[#FDFDFC] px-6 py-16 dark:bg-[#0a0a0a]">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-6 text-center">
                            <h3 className="text-3xl font-bold text-[#1b1b18] dark:text-[#EDEDEC]">
                                LATEST LINEUP
                            </h3>
                            <p className="mt-2 text-lg text-muted-foreground">
                                New season, new look. Grab yours now!
                            </p>
                        </div>
                        <div className="mb-8 flex items-center justify-between">
                            <h2 className="text-2xl font-bold">
                                Featured Jerseys
                            </h2>
                            <Link
                                href="/"
                                className="text-sm font-medium text-[#f53003] hover:underline"
                            >
                                View All
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {featuredJerseys.map((jersey) => (
                                <Card
                                    key={jersey.id}
                                    className="overflow-hidden transition-shadow hover:shadow-lg"
                                >
                                    <div className="flex h-48 items-center justify-center bg-[#f5f5f5] dark:bg-[#1D1D1D]">
                                        <span className="text-4xl font-bold text-[#ccc] dark:text-[#444]">
                                            {jersey.image}
                                        </span>
                                    </div>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="line-clamp-1 text-lg">
                                            {jersey.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pb-2">
                                        <p className="text-sm text-muted-foreground">
                                            {jersey.league}
                                        </p>
                                        <p className="mt-2 text-2xl font-bold text-[#f53003]">
                                            ${jersey.price}
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full" asChild>
                                            <Link href="/">Add to Cart</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="bg-white px-6 py-16 dark:bg-[#161615]">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f53003]/10 text-2xl">
                                    ✓
                                </div>
                                <h3 className="mb-2 text-lg font-semibold">
                                    Official Licensing
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    All jerseys are officially licensed by clubs
                                    and leagues
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f53003]/10 text-2xl">
                                    ★
                                </div>
                                <h3 className="mb-2 text-lg font-semibold">
                                    Premium Quality
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Made with the finest materials for lasting
                                    comfort
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f53003]/10 text-2xl">
                                    ⚡
                                </div>
                                <h3 className="mb-2 text-lg font-semibold">
                                    Fast Shipping
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Quick delivery worldwide with tracking
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-[#e3e3e0] bg-[#f5f5f5] px-6 py-12 dark:border-[#3E3E3A] dark:bg-[#0f0f0f]">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                            <div>
                                <h3 className="mb-4 text-lg font-semibold">
                                    Jersify
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Your destination for authentic football
                                    jerseys.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-4 font-medium">Shop</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>
                                        <Link
                                            href="/"
                                            className="hover:text-[#f53003]"
                                        >
                                            Premier League
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="hover:text-[#f53003]"
                                        >
                                            La Liga
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="hover:text-[#f53003]"
                                        >
                                            Serie A
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="mb-4 font-medium">Company</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>
                                        <Link
                                            href="/"
                                            className="hover:text-[#f53003]"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="hover:text-[#f53003]"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="hover:text-[#f53003]"
                                        >
                                            Careers
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="mb-4 font-medium">Legal</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>
                                        <Link
                                            href="/"
                                            className="hover:text-[#f53003]"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="hover:text-[#f53003]"
                                        >
                                            Terms of Service
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-[#e3e3e0] pt-8 dark:border-[#3E3E3A]">
                            <p className="text-center text-sm text-muted-foreground">
                                © 2024 Jersify. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
