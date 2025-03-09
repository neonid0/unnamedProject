import SearchBar from "../components/searchBar";
import Form from "next/form";

// There is a problem which is cruical to solve 
// but this project goes to wrong path
// maybe take care of this problem in the future
export default function Home() {
    return (
        <div className="min-h-screen">

            {/* <SearchBar /> */}

            <Form action="/home/addproduct">
                {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
                <input name="query" />
                <button type="submit">Submit</button>
            </Form>

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
