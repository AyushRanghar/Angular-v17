export type IconSize = LooseAutocomplete<'sm' | 'xs'>;

type LooseAutocomplete<T extends string> = T | Omit<string, T>;

export interface IconProps {
  size: IconSize;
}

// Removing a member
export type Letters = 'a' | 'b' | 'c';

type RemoveC<TType> = TType extends 'c' ? 'd' : TType;
// Removes the c in the uinion and replace it with D

export type WowWithourC = RemoveC<Letters>;
