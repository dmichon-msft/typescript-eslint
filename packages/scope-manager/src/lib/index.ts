// THIS CODE WAS AUTOMATICALLY GENERATED
// DO NOT EDIT THIS CODE BY HAND
// RUN THE FOLLOWING COMMAND FROM THE WORKSPACE ROOT TO REGENERATE:
// npx nx generate-lib repo

import type { ImplicitLibVariableOptions } from '../variable';

import { decorators } from './decorators';
import { decorators_legacy } from './decorators.legacy';
import { dom } from './dom';
import { dom_asynciterable } from './dom.asynciterable';
import { dom_iterable } from './dom.iterable';
import { es5 } from './es5';
import { es6 } from './es6';
import { es7 } from './es7';
import { es2015 } from './es2015';
import { es2015_collection } from './es2015.collection';
import { es2015_core } from './es2015.core';
import { es2015_generator } from './es2015.generator';
import { es2015_iterable } from './es2015.iterable';
import { es2015_promise } from './es2015.promise';
import { es2015_proxy } from './es2015.proxy';
import { es2015_reflect } from './es2015.reflect';
import { es2015_symbol } from './es2015.symbol';
import { es2015_symbol_wellknown } from './es2015.symbol.wellknown';
import { es2016 } from './es2016';
import { es2016_array_include } from './es2016.array.include';
import { es2016_full } from './es2016.full';
import { es2016_intl } from './es2016.intl';
import { es2017 } from './es2017';
import { es2017_arraybuffer } from './es2017.arraybuffer';
import { es2017_date } from './es2017.date';
import { es2017_full } from './es2017.full';
import { es2017_intl } from './es2017.intl';
import { es2017_object } from './es2017.object';
import { es2017_sharedmemory } from './es2017.sharedmemory';
import { es2017_string } from './es2017.string';
import { es2017_typedarrays } from './es2017.typedarrays';
import { es2018 } from './es2018';
import { es2018_asyncgenerator } from './es2018.asyncgenerator';
import { es2018_asynciterable } from './es2018.asynciterable';
import { es2018_full } from './es2018.full';
import { es2018_intl } from './es2018.intl';
import { es2018_promise } from './es2018.promise';
import { es2018_regexp } from './es2018.regexp';
import { es2019 } from './es2019';
import { es2019_array } from './es2019.array';
import { es2019_full } from './es2019.full';
import { es2019_intl } from './es2019.intl';
import { es2019_object } from './es2019.object';
import { es2019_string } from './es2019.string';
import { es2019_symbol } from './es2019.symbol';
import { es2020 } from './es2020';
import { es2020_bigint } from './es2020.bigint';
import { es2020_date } from './es2020.date';
import { es2020_full } from './es2020.full';
import { es2020_intl } from './es2020.intl';
import { es2020_number } from './es2020.number';
import { es2020_promise } from './es2020.promise';
import { es2020_sharedmemory } from './es2020.sharedmemory';
import { es2020_string } from './es2020.string';
import { es2020_symbol_wellknown } from './es2020.symbol.wellknown';
import { es2021 } from './es2021';
import { es2021_full } from './es2021.full';
import { es2021_intl } from './es2021.intl';
import { es2021_promise } from './es2021.promise';
import { es2021_string } from './es2021.string';
import { es2021_weakref } from './es2021.weakref';
import { es2022 } from './es2022';
import { es2022_array } from './es2022.array';
import { es2022_error } from './es2022.error';
import { es2022_full } from './es2022.full';
import { es2022_intl } from './es2022.intl';
import { es2022_object } from './es2022.object';
import { es2022_regexp } from './es2022.regexp';
import { es2022_string } from './es2022.string';
import { es2023 } from './es2023';
import { es2023_array } from './es2023.array';
import { es2023_collection } from './es2023.collection';
import { es2023_full } from './es2023.full';
import { es2023_intl } from './es2023.intl';
import { es2024 } from './es2024';
import { es2024_arraybuffer } from './es2024.arraybuffer';
import { es2024_collection } from './es2024.collection';
import { es2024_full } from './es2024.full';
import { es2024_object } from './es2024.object';
import { es2024_promise } from './es2024.promise';
import { es2024_regexp } from './es2024.regexp';
import { es2024_sharedmemory } from './es2024.sharedmemory';
import { es2024_string } from './es2024.string';
import { esnext } from './esnext';
import { esnext_array } from './esnext.array';
import { esnext_asynciterable } from './esnext.asynciterable';
import { esnext_bigint } from './esnext.bigint';
import { esnext_collection } from './esnext.collection';
import { esnext_decorators } from './esnext.decorators';
import { esnext_disposable } from './esnext.disposable';
import { esnext_full } from './esnext.full';
import { esnext_intl } from './esnext.intl';
import { esnext_iterator } from './esnext.iterator';
import { esnext_object } from './esnext.object';
import { esnext_promise } from './esnext.promise';
import { esnext_regexp } from './esnext.regexp';
import { esnext_string } from './esnext.string';
import { esnext_symbol } from './esnext.symbol';
import { esnext_weakref } from './esnext.weakref';
import { lib as libBase } from './lib';
import { scripthost } from './scripthost';
import { webworker } from './webworker';
import { webworker_asynciterable } from './webworker.asynciterable';
import { webworker_importscripts } from './webworker.importscripts';
import { webworker_iterable } from './webworker.iterable';

const lib: ReadonlyMap<string, [string, ImplicitLibVariableOptions][]> =
  new Map<string, [string, ImplicitLibVariableOptions][]>(
    Object.entries({
      decorators: Object.entries(decorators),
      'decorators.legacy': Object.entries(decorators_legacy),
      dom: Object.entries(dom),
      'dom.asynciterable': Object.entries(dom_asynciterable),
      'dom.iterable': Object.entries(dom_iterable),
      es5: Object.entries(es5),
      es6: Object.entries(es6),
      es7: Object.entries(es7),
      es2015: Object.entries(es2015),
      'es2015.collection': Object.entries(es2015_collection),
      'es2015.core': Object.entries(es2015_core),
      'es2015.generator': Object.entries(es2015_generator),
      'es2015.iterable': Object.entries(es2015_iterable),
      'es2015.promise': Object.entries(es2015_promise),
      'es2015.proxy': Object.entries(es2015_proxy),
      'es2015.reflect': Object.entries(es2015_reflect),
      'es2015.symbol': Object.entries(es2015_symbol),
      'es2015.symbol.wellknown': Object.entries(es2015_symbol_wellknown),
      es2016: Object.entries(es2016),
      'es2016.array.include': Object.entries(es2016_array_include),
      'es2016.full': Object.entries(es2016_full),
      'es2016.intl': Object.entries(es2016_intl),
      es2017: Object.entries(es2017),
      'es2017.arraybuffer': Object.entries(es2017_arraybuffer),
      'es2017.date': Object.entries(es2017_date),
      'es2017.full': Object.entries(es2017_full),
      'es2017.intl': Object.entries(es2017_intl),
      'es2017.object': Object.entries(es2017_object),
      'es2017.sharedmemory': Object.entries(es2017_sharedmemory),
      'es2017.string': Object.entries(es2017_string),
      'es2017.typedarrays': Object.entries(es2017_typedarrays),
      es2018: Object.entries(es2018),
      'es2018.asyncgenerator': Object.entries(es2018_asyncgenerator),
      'es2018.asynciterable': Object.entries(es2018_asynciterable),
      'es2018.full': Object.entries(es2018_full),
      'es2018.intl': Object.entries(es2018_intl),
      'es2018.promise': Object.entries(es2018_promise),
      'es2018.regexp': Object.entries(es2018_regexp),
      es2019: Object.entries(es2019),
      'es2019.array': Object.entries(es2019_array),
      'es2019.full': Object.entries(es2019_full),
      'es2019.intl': Object.entries(es2019_intl),
      'es2019.object': Object.entries(es2019_object),
      'es2019.string': Object.entries(es2019_string),
      'es2019.symbol': Object.entries(es2019_symbol),
      es2020: Object.entries(es2020),
      'es2020.bigint': Object.entries(es2020_bigint),
      'es2020.date': Object.entries(es2020_date),
      'es2020.full': Object.entries(es2020_full),
      'es2020.intl': Object.entries(es2020_intl),
      'es2020.number': Object.entries(es2020_number),
      'es2020.promise': Object.entries(es2020_promise),
      'es2020.sharedmemory': Object.entries(es2020_sharedmemory),
      'es2020.string': Object.entries(es2020_string),
      'es2020.symbol.wellknown': Object.entries(es2020_symbol_wellknown),
      es2021: Object.entries(es2021),
      'es2021.full': Object.entries(es2021_full),
      'es2021.intl': Object.entries(es2021_intl),
      'es2021.promise': Object.entries(es2021_promise),
      'es2021.string': Object.entries(es2021_string),
      'es2021.weakref': Object.entries(es2021_weakref),
      es2022: Object.entries(es2022),
      'es2022.array': Object.entries(es2022_array),
      'es2022.error': Object.entries(es2022_error),
      'es2022.full': Object.entries(es2022_full),
      'es2022.intl': Object.entries(es2022_intl),
      'es2022.object': Object.entries(es2022_object),
      'es2022.regexp': Object.entries(es2022_regexp),
      'es2022.string': Object.entries(es2022_string),
      es2023: Object.entries(es2023),
      'es2023.array': Object.entries(es2023_array),
      'es2023.collection': Object.entries(es2023_collection),
      'es2023.full': Object.entries(es2023_full),
      'es2023.intl': Object.entries(es2023_intl),
      es2024: Object.entries(es2024),
      'es2024.arraybuffer': Object.entries(es2024_arraybuffer),
      'es2024.collection': Object.entries(es2024_collection),
      'es2024.full': Object.entries(es2024_full),
      'es2024.object': Object.entries(es2024_object),
      'es2024.promise': Object.entries(es2024_promise),
      'es2024.regexp': Object.entries(es2024_regexp),
      'es2024.sharedmemory': Object.entries(es2024_sharedmemory),
      'es2024.string': Object.entries(es2024_string),
      esnext: Object.entries(esnext),
      'esnext.array': Object.entries(esnext_array),
      'esnext.asynciterable': Object.entries(esnext_asynciterable),
      'esnext.bigint': Object.entries(esnext_bigint),
      'esnext.collection': Object.entries(esnext_collection),
      'esnext.decorators': Object.entries(esnext_decorators),
      'esnext.disposable': Object.entries(esnext_disposable),
      'esnext.full': Object.entries(esnext_full),
      'esnext.intl': Object.entries(esnext_intl),
      'esnext.iterator': Object.entries(esnext_iterator),
      'esnext.object': Object.entries(esnext_object),
      'esnext.promise': Object.entries(esnext_promise),
      'esnext.regexp': Object.entries(esnext_regexp),
      'esnext.string': Object.entries(esnext_string),
      'esnext.symbol': Object.entries(esnext_symbol),
      'esnext.weakref': Object.entries(esnext_weakref),
      lib: Object.entries(libBase),
      scripthost: Object.entries(scripthost),
      webworker: Object.entries(webworker),
      'webworker.asynciterable': Object.entries(webworker_asynciterable),
      'webworker.importscripts': Object.entries(webworker_importscripts),
      'webworker.iterable': Object.entries(webworker_iterable),
    }),
  );

export { lib };
