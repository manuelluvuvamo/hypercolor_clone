export default function Select() {
  return (
    <select
      name=""
      id=""
      className=" w-full rounded-xl border-gray-800/75 bg-gray-900 p-3 font-medium"
    >
      <option value="bg-gradient-to-t">To Top</option>
      <option value="bg-gradient-to-tr">To Top Right</option>
      <option value="bg-gradient-to-r" selected>
        To Right
      </option>
      <option value="bg-gradient-to-br">To Bottom Right</option>
      <option value="bg-gradient-to-b">To Bottom</option>
      <option value="bg-gradient-to-bl">To Bottom Left</option>
      <option value="bg-gradient-to-l">To Left</option>
      <option value="bg-gradient-to-tl">To Top Left</option>
      <option value="bg-[conic-gradient(var(--tw-gradient-stops))]">
        Conic Center
      </option>
      <option value="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))]">
        Conic Top
      </option>
      <option value="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))]">
        Conic Top Right
      </option>
      <option value="bg-[conic-gradient(at_right,_var(--tw-gradient-stops))]">
        Conic Right
      </option>
      <option value="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))]">
        Conic Bottom Right
      </option>
      <option value="bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))]">
        Conic Bottom
      </option>
      <option value="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))]">
        Conic Bottom Left
      </option>
      <option value="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]">
        Conic Left
      </option>
      <option value="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))]">
        Conic Top Left
      </option>
      <option value="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]">
        Radial Center
      </option>
      <option value="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]">
        Radial Top
      </option>
      <option value="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]">
        Radial Top Right
      </option>
      <option value="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))]">
        Radial Right
      </option>
      <option value="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]">
        Radial Bottom Right
      </option>
      <option value="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]">
        Radial Bottom
      </option>
      <option value="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]">
        Radial Bottom Left
      </option>
      <option value="bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))]">
        Radial Left
      </option>
      <option value="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]">
        Radial Top Left
      </option>
    </select>
  );
}
