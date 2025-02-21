// component imports:
import PortfilioButton from "./PortfolioButton";
import RepoButton from "./RepoButton";

export default function Header({}) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-24 p-4 mt-4">
        <PortfilioButton
          link={"https://prathamsnehi.com"}
          font={"Ubuntu Mono"}
        />
        <RepoButton
          repoLink={"https://github.com/blackmask-exe/quiz-manager-react"}
          font={"Ubuntu Mono"}
        />
      </div>
    </>
  );
}
