enum LogLevel {
    DEBUG,
    WARNING,
    ERROR,
}

Object.values(LogLevel);

//  Outupt would be like this
const LOG_LEVEL = {
    DEBUG: 0,
    0: 'DEBUG',
    WARNING: 1,
    1: 'WARNING',
    ERROR: 2,
    2: 'ERROR',
}


type ObjectValues<T> = T[keyof T];

// Here we have two ways as const and enum
const CONST_LOG = {
    DEBUBG: 'DEBUG',
    WARNING: 'WARNING',
} as const;

const enum ENUM_LOG {
    DEBUBG = 'DEBUG',
    WARNING ='WARNING',
}

type LogLevel1 = ObjectValues<typeof CONST_LOG>
type LogLevel2 = ObjectValues<typeof ENUM_LOG>

function log(message: string, level1: LogLevel1, level2: ENUM_LOG){

}

// when we use as const we can directly pass in the value.
// in case of enums we have to use the key ENUM_LOG to get the correct value.
log('Hey', 'DEBUG', ENUM_LOG.DEBUBG);


