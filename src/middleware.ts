import type { NextRequest } from 'next/server';
import { locales } from 'nextra/locales';

export const middleware = (request: NextRequest) => locales(request);
