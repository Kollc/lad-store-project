import style from "./page-title.module.scss";

type PageTitleType = {
  title: string;
};

function PageTitle({ title }: PageTitleType): JSX.Element {
  return <h1 className={style.pageTitle}>{title}</h1>;
}

export default PageTitle;
