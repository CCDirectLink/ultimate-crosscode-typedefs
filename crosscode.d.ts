// TypeScript definitions for CrossCode 1.3.0-1

/// <reference types="jquery" />
/// <reference lib="DOM" />

import './type-utils';
import './impact-class-system-correct';
import './impact-core';
import './crosscode-external-scripts';
import './modules/__all__';

//Convert namespaces to variables
export declare const ig: { [key in keyof typeof window.ig]: typeof window.ig[key] };
export declare const sc: { [key in keyof typeof window.sc]: typeof window.sc[key] };