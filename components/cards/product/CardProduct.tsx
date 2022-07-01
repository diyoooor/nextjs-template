export interface ICardProduct {
  imgUrl: string;
  title: string;
}

const CardProduct: React.FC<ICardProduct> = ({ imgUrl, title }) => {
  return (
    <div className="overflow-x-clip m-5 shadow-xs hover:shadow-lg  shadow-slate-900  transition-all ">
      <div className="max-h-250 overflow-hidden">
        <img
          className="w-max min-w-fit h-300 transition-all"
          src={imgUrl}
          alt={imgUrl}
          height={200}
          width={200}
        />
      </div>
      <div className="p-2 text-center">
        <div className="text-2xl font-bold underline pb-5">{title}</div>
        <div className="text-sm ">Accescories</div>
        <div className="text-sm ">Men</div>
      </div>
    </div>
  );
};

export default CardProduct;
