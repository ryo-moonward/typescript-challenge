type SolutionLetters = 'a' | 'b' | 'c'

/* *
    * Complete RemoveC type
    * Remove c from Letters
*/

type SolutionRemoveC<T> = T extends 'c' ? never : T
type SolutionExcludeC<T> = Exclude<T , 'c'>
type SolutionExtractC<T> = Exclude<T, 'c'>

type SolutionLettersWithoutC = SolutionRemoveC<SolutionLetters>
type SolutionLettersExcludingC = SolutionExcludeC<SolutionLetters>
type solutionLettersExtractingC = SolutionExtractC<SolutionLetters>