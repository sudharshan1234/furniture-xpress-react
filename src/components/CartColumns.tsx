const CartColumns = () => {
  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-[316px_1fr_1fr_1fr_auto] justify-items-center gap-x-4">
        <h5 className="text-grey-500 font-normal capitalize">item</h5>
        <h5 className="text-grey-500 font-normal capitalize">price</h5>
        <h5 className="text-grey-500 font-normal capitalize">quantity</h5>
        <h5 className="text-grey-500 font-normal capitalize">subtotal</h5>
        <span className="w-8 h-8"></span>
      </div>
      <hr className="mt-4 mb-12" />
    </div>
  );
};

export default CartColumns;
