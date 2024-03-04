// Conditional Type
type Result = true extends boolean ? 1 : 0

const func = (val: boolean) => {
    return 1212;
};

type FuncResult = ReturnType<typeof func>;