/**
 html-safe helper is used to make the string html safe

 Note :-
 This util is used to return a Safestring,
 Dont use triple curlies [{{{}}}] for html_safe, Refer below link,
 https://github.com/rwjblue/ember-template-lint#triple-curlies

 @module Helpers
 @class html-safe
 @public
 */
 import { htmlSafe } from '@ember/template';

 import { helper } from '@ember/component/helper';
 
 export function HtmlSafe(params) {
   return htmlSafe(params);
 }
 
 export default helper(HtmlSafe);
 