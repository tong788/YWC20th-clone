const Annoucement = () => {
    return (
      <div className="mt-8 flex flex-col items-center">
        <div className="mt-4">
          <p className="mb-2">กรุณาค้นหาชื่อของคุณ</p>
          <input
            className="bg-white rounded-lg w-48 h-8 text-black p-2"
            placeholder="ชื่อ"
          />
        </div>
      </div>
    );
}

export default Annoucement