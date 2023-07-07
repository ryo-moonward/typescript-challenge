type SolutionIconSize = LooseAutoComplete<'sm' | 'lg'>
type SolutionIconProps2 = 'sm' | 'lg' | Omit<string, 'sm' | 'lg'>

type LooseAutoComplete<T extends string> = T | Omit<string, T>

interface SolutionIconProps {
    size: SolutionIconSize
}

const Icon = ({size}: SolutionIconProps) => {
    return <></>
}

const SolutionLoseAutocomplete = () => {
  return (
    <Icon size=""/>
  )
}

export default SolutionLoseAutocomplete;