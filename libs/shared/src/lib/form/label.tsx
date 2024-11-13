type LabelProps = Readonly<{
    name: string
    type: string
}>

export const Label = ({ name, type }: LabelProps) => {

return (
    <div className='flex flex-col'>
        <label htmlFor={name} className="focus:border-slate-50">{name}</label>
        <input id={name} name={name} type={type} required className="border hover:border-slate-800 focus:border-slate-800 focus:outline-none"/>
    </div>
)
}