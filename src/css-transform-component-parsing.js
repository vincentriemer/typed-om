// Copyright 2016 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.

(function(internal) {
  function consumeSkew(string) {
  }

  var transformFunctions = {
    'matrix': internal.parsing.consumeMatrix,
    'perspective': internal.parsing.consumePerspective,
    'rotate': internal.parsing.consumeRotation,
    'scale': internal.parsing.consumeScale,
    'skew': consumeSkew,
    'translate': internal.parsing.consumeTranslate,
  };

  function consumeTransformComponent(string) {
    for (var fn in transformFunctions) {
      if (string.startsWith(fn)) {
        return transformFunctions[fn](string);
      }
    }
    return null;
  }

  internal.parsing.consumeTransformComponent = consumeTransformComponent;
})(typedOM.internal);
