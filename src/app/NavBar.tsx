import { Suspense } from "react";
interface NavBarProps {
    questionsList: string[][];
    setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
    questionIndex: number;
}
function NavBar(props:NavBarProps): React.JSX.Element {
    const { questionsList, setQuestionIndex, questionIndex } = props;

    const listItems = questionsList.map((questionRef, index) => (
        <li className={`ml-0 pl-2.5 cursor-pointer whitespace-nowrap text-xs leading-normal ${index === questionIndex ? "text-white" : "text-black"} font-mono ${index === questionIndex ? "bg-[#004976]" : index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}`} key={"left-nav:" + questionRef} onClick={() => setQuestionIndex(index)}>{index + 1}</li>
        ));

    return (
        <nav className="w-20 fixed h-full top-0 left-0 bg-gray-100 z-0">
            <Suspense fallback={<div>Loading...</div>}>
	            <ol id="leftnav" className=" pt-1 overflow-x-hidden overflow-y-scroll bg-gray-100 h-full">
                    {listItems}
	            </ol>
            </Suspense>
        </nav>
    )
}

export default NavBar;