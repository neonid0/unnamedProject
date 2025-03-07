import Header from "../components/header";

export default function Home() {
    return (
        <div className="min-h-screen">

            <Header />

            <div className="flex flex-row  items-stretch mt-4 justify-center">

                <div className="flex flex-col items-start w-64 min-w-56">
                    Side line for home menu.
                </div>

                <div className="flex flex-col w-4xl min-w-2xl">
                    <ul className=" grid grid-rows-2">
                        <li>An item</li>
                        <li>An item</li>
                        <li>An item</li>
                        <li>An item</li>
                    </ul>
                </div>

            </div>

        </div>

    )
}
