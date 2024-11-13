type LabelProps = Readonly<{
  name: string;
  type: string;
}>;

export const Label = ({ name, type }: LabelProps) => {
  return (
    <div className='flex flex-col'>
      <label className='focus:border-slate-50' htmlFor={name}>
        {name}
      </label>
      <input
        className='border hover:border-slate-800 focus:border-slate-800 focus:outline-none'
        id={name}
        name={name}
        required
        type={type}
      />
    </div>
  );
};
