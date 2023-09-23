"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import ColorPicker from "react-pick-color";
import { GrAdd } from "react-icons/gr";

type Props = {
  setFormData: Dispatch<SetStateAction<any>>;
  formDataColor: string;
};

export default function Color({ setFormData, formDataColor }: Props) {
  const [color, setColor] = useState("#fff");
  const [open, setOpen] = useState<boolean>(false);

  const colors: string[] = formDataColor.split(",");
  const [selectedColors, setSelectedColors] = useState<string[]>(colors);

  useEffect(() => {
    const handleSelectedColors = () => {
      setFormData((prevFormData: FormData) => ({
        ...prevFormData,
        color: selectedColors.join(","),
      }));
      handleSelectedColors();
    };
  }, [selectedColors]);

  const handleColorButtonClick = () => {
    setSelectedColors((prevSelectedColors) => [...prevSelectedColors, color]);
    setOpen(false);
  };

  const handleDeleteColor = (indexToDelete: number) => {
    setSelectedColors((prevSelectedColors) => {
      const updateColors = [...prevSelectedColors];
      updateColors.splice(indexToDelete, 1);
      return updateColors;
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mt-3">
        <button
          className="block border rounded-lg px-3 text-[14px]"
          onClick={() => setOpen((prev) => !prev)}
        >
          Pilih Warna
        </button>
        {open && (
          <ColorPicker
            color={color}
            onChange={(color) => setColor(color.hex)}
          />
        )}
        <button
          className="flex items-center gap-x-1 border rounded-lg p-1 px-3 text-[14px] "
          onClick={handleColorButtonClick}
        >
          Tambah <GrAdd className="ml-1" size={16} />
        </button>
      </div>
      <div className="mt-5">
        {selectedColors.map((color, index) => (
          <div key={index} className="flex items-center gap-x-4 mb-2">
            <div
              className="w-10 h-10 rounded-full inline-block border-pink-400"
              style={{ backgroundColor: color }}
            />
            <span className="border rounded-lg p-1 px-3 text-[14px]">
              {color}
            </span>
            <button
              className="border rounded-lg p-1 px-3 text-[14px]"
              onClick={() => handleDeleteColor(index)}
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
