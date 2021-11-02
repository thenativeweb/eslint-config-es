'use strict';

const react = {
  'react/boolean-prop-naming': 'off',
  'react/button-has-type': 'off',
  'react/default-props-match-prop-types': 'off',
  'react/destructuring-assignment': [ 'error', 'always' ],
  'react/display-name': 'off',
  'react/forbid-component-props': 'off',
  'react/forbid-dom-props': 'off',
  'react/forbid-elements': 'off',
  'react/forbid-prop-types': 'off',
  'react/forbid-foreign-prop-types': 'off',
  'react/jsx-curly-newline': [ 'error', {
    multiline: 'consistent',
    singleline: 'consistent'
  }],
  'react/no-access-state-in-setstate': 'error',
  'react/no-array-index-key': 'error',
  'react/no-children-prop': 'error',
  'react/no-danger': 'off',
  'react/no-danger-with-children': 'error',
  'react/no-deprecated': 'error',
  'react/no-did-mount-set-state': 'error',
  'react/no-did-update-set-state': 'error',
  'react/no-direct-mutation-state': 'error',
  'react/no-find-dom-node': 'error',
  'react/no-is-mounted': 'error',
  'react/no-multi-comp': 'off',
  'react/no-redundant-should-component-update': 'error',
  'react/no-render-return-value': 'error',
  'react/no-set-state': 'off',
  'react/no-string-refs': [ 'error', { noTemplateLiterals: true }],
  'react/no-this-in-sfc': 'error',
  'react/no-typos': 'error',
  'react/no-unescaped-entities': 'error',
  'react/no-unknown-property': 'error',
  'react/no-unsafe': 'off',
  'react/no-unused-prop-types': 'error',
  'react/no-unused-state': 'error',
  'react/no-will-update-set-state': 'error',
  'react/prefer-es6-class': [ 'error', 'always' ],
  'react/prefer-read-only-props': 'off',
  'react/prefer-stateless-function': [ 'error', {
    ignorePureComponents: false
  }],
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'error',
  'react/require-default-props': 'off',
  'react/require-optimization': 'off',
  'react/require-render-return': 'error',
  'react/self-closing-comp': [ 'error', {
    component: true,
    html: true
  }],
  'react/sort-comp': 'error',
  'react/sort-prop-types': [ 'error', {
    callbacksLast: true,
    ignoreCase: true,
    requiredFirst: true,
    sortShapeProp: true,
    noSortAlphabetically: false
  }],
  'react/state-in-constructor': [ 'error', 'always' ],
  'react/static-property-placement': 'off',
  'react/style-prop-object': 'error',
  'react/void-dom-elements-no-children': 'error',

  'react/jsx-boolean-value': [ 'error', 'always' ],
  'react/jsx-child-element-spacing': 'error',
  'react/jsx-closing-bracket-location': [ 'error', 'tag-aligned' ],
  'react/jsx-closing-tag-location': 'error',
  'react/jsx-curly-spacing': [ 'error', {
    when: 'always',
    spacing: { objectLiterals: 'never' }
  }],
  'react/jsx-equals-spacing': [ 'error', 'never' ],
  'react/jsx-filename-extension': [ 'error', {
    extensions: [ '.jsx', '.tsx' ]
  }],
  'react/jsx-first-prop-new-line': [ 'error', 'multiline' ],
  'react/jsx-handler-names': [ 'error', {
    eventHandlerPrefix: 'handle',
    eventHandlerPropPrefix: 'on',
    checkLocalVariables: false
  }],
  'react/jsx-indent': [ 'error', 2 ],
  'react/jsx-indent-props': [ 'error', 2 ],
  'react/jsx-key': [ 'error', { checkFragmentShorthand: true }],
  'react/jsx-max-depth': 'off',
  'react/jsx-max-props-per-line': 'off',
  'react/jsx-no-bind': [ 'error', {
    ignoreRefs: false,
    ignoreDOMComponents: false,
    allowArrowFunctions: true,
    allowBind: false,
    allowFunctions: false
  }],
  'react/jsx-no-comment-textnodes': 'error',
  'react/jsx-no-duplicate-props': [ 'error', { ignoreCase: true }],
  'react/jsx-no-literals': 'off',
  'react/jsx-no-target-blank': [ 'error', {
    allowReferrer: false,
    enforceDynamicLinks: 'always'
  }],
  'react/jsx-no-undef': [ 'error', { allowGlobals: false }],
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-curly-brace-presence': [ 'error', 'never' ],
  'react/jsx-fragments': [ 'error', 'element' ],
  'react/jsx-pascal-case': [ 'error', { allowAllCaps: false, ignore: []}],
  'react/jsx-props-no-multi-spaces': 'error',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-sort-default-props': 'off',
  'react/jsx-sort-props': 'off',
  'react/jsx-tag-spacing': [ 'error', {
    closingSlash: 'never',
    beforeSelfClosing: 'always',
    afterOpening: 'never',
    beforeClosing: 'never'
  }],
  'react/jsx-uses-react': 'error',
  'react/jsx-uses-vars': 'error',
  'react/jsx-wrap-multilines': 'error'
};

module.exports = {
  react
};
