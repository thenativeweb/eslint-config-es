import { usePlugin } from '../betterRules';

const react = usePlugin('react', {
  booleanPropNaming: false,
  buttonHasType: false,
  defaultPropsMatchPropTypes: false,
  destructuringAssignment: [ 'always' ],
  displayName: false,
  forbidComponentProps: false,
  forbidDomProps: false,
  forbidElements: false,
  forbidPropTypes: false,
  forbidForeignPropTypes: false,
  jsxBooleanValue: [ 'always' ],
  jsxChildElementSpacing: [],
  jsxClosingBracketLocation: [ 'tag-aligned' ],
  jsxClosingTagLocation: [],
  jsxCurlyNewline: [{
    multiline: 'consistent',
    singleline: 'consistent'
  }],
  jsxCurlySpacing: [{
    when: 'always',
    spacing: { objectLiterals: 'never' }
  }],
  jsxEqualsSpacing: [ 'never' ],
  jsxFilenameExtension: [{
    extensions: [ '.jsx', '.tsx' ]
  }],
  jsxFirstPropNewLine: [ 'multiline' ],
  jsxHandlerNames: [{
    eventHandlerPrefix: 'handle',
    eventHandlerPropPrefix: 'on',
    checkLocalVariables: false
  }],
  jsxIndent: [ 2 ],
  jsxIndentProps: [{ indentMode: 2, ignoreTernaryOperator: false }],
  jsxKey: [{
    checkFragmentShorthand: true,
    checkKeyMustBeforeSpread: true
  }],
  jsxMaxDepth: false,
  jsxMaxPropsPerLine: false,
  jsxNewline: false,
  jsxNoBind: [{
    ignoreRefs: false,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ignoreDOMComponents: false,
    allowArrowFunctions: true,
    allowBind: false,
    allowFunctions: false
  }],
  jsxNoCommentTextnodes: [],
  jsxNoConstructedContextValues: [],
  jsxNoDuplicateProps: [{ ignoreCase: true }],
  jsxNoLiterals: false,
  jsxNoTargetBlank: [{
    allowReferrer: false,
    enforceDynamicLinks: 'always',
    warnOnSpreadAttributes: true
  }],
  jsxNoUndef: [{ allowGlobals: false }],
  jsxNoUselessFragment: [],
  jsxOneExpressionPerLine: false,
  jsxCurlyBracePresence: [ 'never' ],
  jsxFragments: [ 'element' ],
  jsxPascalCase: [{ allowAllCaps: false, ignore: []}],
  jsxPropsNoMultiSpaces: [],
  jsxPropsNoSpreading: false,
  jsxSortDefaultProps: false,
  jsxSortProps: false,
  jsxTagSpacing: [{
    closingSlash: 'never',
    beforeSelfClosing: 'always',
    afterOpening: 'never',
    beforeClosing: 'never'
  }],
  jsxUsesReact: [],
  jsxUsesVars: [],
  jsxWrapMultilines: [],
  noAccessStateInSetstate: [],
  noArrayIndexKey: [],
  noChildrenProp: [],
  noDanger: false,
  noDangerWithChildren: [],
  noDeprecated: [],
  noDidMountSetState: [],
  noDidUpdateSetState: [],
  noDirectMutationState: [],
  noFindDomNode: [],
  noIsMounted: [],
  noMultiComp: false,
  noRedundantShouldComponentUpdate: [],
  noRenderReturnValue: [],
  noSetState: false,
  noStringRefs: [{ noTemplateLiterals: true }],
  noThisInSfc: [],
  noTypos: [],
  noUnescapedEntities: [],
  noUnknownProperty: [],
  noUnsafe: false,
  noUnusedPropTypes: [],
  noUnusedState: [],
  noWillUpdateSetState: [],
  preferEs6Class: [ 'always' ],
  preferReadOnlyProps: false,
  preferStatelessFunction: [{
    ignorePureComponents: false
  }],
  propTypes: false,
  reactInJsxScope: [],
  requireDefaultProps: false,
  requireOptimization: false,
  requireRenderReturn: [],
  selfClosingComp: [{
    component: true,
    html: true
  }],
  sortComp: [],
  sortPropTypes: [{
    callbacksLast: true,
    ignoreCase: true,
    requiredFirst: true,
    sortShapeProp: true,
    noSortAlphabetically: false
  }],
  stateInConstructor: [ 'always' ],
  staticPropertyPlacement: false,
  stylePropObject: [],
  voidDomElementsNoChildren: []
});

export {
  react
};
