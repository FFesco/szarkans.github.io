import {
  script as script5
} from "./chunk-7OHFPI3S.js";
import {
  script as script4
} from "./chunk-BS7L5EBX.js";
import {
  script as script3
} from "./chunk-VKZXHPXI.js";
import "./chunk-YKV73SQT.js";
import {
  script as script6
} from "./chunk-CFC7QGI6.js";
import {
  UniqueComponentId
} from "./chunk-JL7KU7RS.js";
import "./chunk-CXETA7UJ.js";
import "./chunk-VHCN4E3L.js";
import {
  script as script2
} from "./chunk-GTHTUSPK.js";
import "./chunk-IAH4HJXH.js";
import "./chunk-TAUDC576.js";
import "./chunk-U6KWIEK7.js";
import "./chunk-PCPF6MCG.js";
import {
  script
} from "./chunk-HJIV2PMA.js";
import "./chunk-3NBT74VZ.js";
import {
  BaseStyle
} from "./chunk-FMDU42L7.js";
import {
  Fragment,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  mergeProps,
  normalizeClass,
  openBlock,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  toDisplayString,
  withCtx
} from "./chunk-5J2UBCUN.js";

// node_modules/primevue/accordion/style/index.mjs
var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-accordionpanel {\n    display: flex;\n    flex-direction: column;\n    border-style: solid;\n    border-width: ".concat(dt("accordion.panel.border.width"), ";\n    border-color: ").concat(dt("accordion.panel.border.color"), ";\n}\n\n.p-accordionheader {\n    all: unset;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: ").concat(dt("accordion.header.padding"), ";\n    color: ").concat(dt("accordion.header.color"), ";\n    background: ").concat(dt("accordion.header.background"), ";\n    border-style: solid;\n    border-width: ").concat(dt("accordion.header.border.width"), ";\n    border-color: ").concat(dt("accordion.header.border.color"), ";\n    font-weight: ").concat(dt("accordion.header.font.weight"), ";\n    border-radius: ").concat(dt("accordion.header.border.radius"), ";\n    transition: background ").concat(dt("accordion.transition.duration"), "; color ").concat(dt("accordion.transition.duration"), "color ").concat(dt("accordion.transition.duration"), ", outline-color ").concat(dt("accordion.transition.duration"), ", box-shadow ").concat(dt("accordion.transition.duration"), ";\n    outline-color: transparent;\n}\n\n.p-accordionpanel:first-child > .p-accordionheader {\n    border-width: ").concat(dt("accordion.header.first.border.width"), ";\n    border-start-start-radius: ").concat(dt("accordion.header.first.top.border.radius"), ";\n    border-start-end-radius: ").concat(dt("accordion.header.first.top.border.radius"), ";\n}\n\n.p-accordionpanel:last-child > .p-accordionheader {\n    border-end-start-radius: ").concat(dt("accordion.header.last.bottom.border.radius"), ";\n    border-end-end-radius: ").concat(dt("accordion.header.last.bottom.border.radius"), ";\n}\n\n.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {\n    border-end-start-radius: ").concat(dt("accordion.header.last.active.bottom.border.radius"), ";\n    border-end-end-radius: ").concat(dt("accordion.header.last.active.bottom.border.radius"), ";\n}\n\n.p-accordionheader-toggle-icon {\n    color: ").concat(dt("accordion.header.toggle.icon.color"), ";\n}\n\n.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {\n    box-shadow: ").concat(dt("accordion.header.focus.ring.shadow"), ";\n    outline: ").concat(dt("accordion.header.focus.ring.width"), " ").concat(dt("accordion.header.focus.ring.style"), " ").concat(dt("accordion.header.focus.ring.color"), ";\n    outline-offset: ").concat(dt("accordion.header.focus.ring.offset"), ";\n}\n\n.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {\n    background: ").concat(dt("accordion.header.hover.background"), ";\n    color: ").concat(dt("accordion.header.hover.color"), ";\n}\n\n.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {\n    color: ").concat(dt("accordion.header.toggle.icon.hover.color"), ";\n}\n\n.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {\n    background: ").concat(dt("accordion.header.active.background"), ";\n    color: ").concat(dt("accordion.header.active.color"), ";\n}\n\n.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {\n    color: ").concat(dt("accordion.header.toggle.icon.active.color"), ";\n}\n\n.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {\n    background: ").concat(dt("accordion.header.active.hover.background"), ";\n    color: ").concat(dt("accordion.header.active.hover.color"), ";\n}\n\n.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {\n    color: ").concat(dt("accordion.header.toggle.icon.active.hover.color"), ";\n}\n\n.p-accordioncontent-content {\n    border-style: solid;\n    border-width: ").concat(dt("accordion.content.border.width"), ";\n    border-color: ").concat(dt("accordion.content.border.color"), ";\n    background-color: ").concat(dt("accordion.content.background"), ";\n    color: ").concat(dt("accordion.content.color"), ";\n    padding: ").concat(dt("accordion.content.padding"), ";\n}\n");
};
var classes = {
  root: "p-accordion p-component"
};
var AccordionStyle = BaseStyle.extend({
  name: "accordion",
  theme,
  classes
});

// node_modules/primevue/accordion/index.mjs
var script$1 = {
  name: "BaseAccordion",
  "extends": script,
  props: {
    value: {
      type: [String, Number, Array],
      "default": void 0
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    lazy: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    selectOnFocus: {
      type: Boolean,
      "default": false
    },
    expandIcon: {
      type: String,
      "default": void 0
    },
    collapseIcon: {
      type: String,
      "default": void 0
    },
    // @deprecated since v4.
    activeIndex: {
      type: [Number, Array],
      "default": null
    }
  },
  style: AccordionStyle,
  provide: function provide() {
    return {
      $pcAccordion: this,
      $parentInstance: this
    };
  }
};
var script7 = {
  name: "Accordion",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:value", "update:activeIndex", "tab-open", "tab-close", "tab-click"],
  data: function data() {
    return {
      id: this.$attrs.id,
      d_value: this.value
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    value: function value(newValue) {
      this.d_value = newValue;
    },
    activeIndex: {
      immediate: true,
      handler: function handler(newValue) {
        if (this.hasAccordionTab) {
          this.d_value = this.multiple ? newValue === null || newValue === void 0 ? void 0 : newValue.map(String) : newValue === null || newValue === void 0 ? void 0 : newValue.toString();
        }
      }
    }
  },
  mounted: function mounted() {
    this.id = this.id || UniqueComponentId();
  },
  methods: {
    isItemActive: function isItemActive(value2) {
      var _this$d_value;
      return this.multiple ? (_this$d_value = this.d_value) === null || _this$d_value === void 0 ? void 0 : _this$d_value.includes(value2) : this.d_value === value2;
    },
    updateValue: function updateValue(newValue) {
      var _this$d_value2;
      var active = this.isItemActive(newValue);
      if (this.multiple) {
        if (active) {
          this.d_value = this.d_value.filter(function(v) {
            return v !== newValue;
          });
        } else {
          if (this.d_value) this.d_value.push(newValue);
          else this.d_value = [newValue];
        }
      } else {
        this.d_value = active ? null : newValue;
      }
      this.$emit("update:value", this.d_value);
      this.$emit("update:activeIndex", this.multiple ? (_this$d_value2 = this.d_value) === null || _this$d_value2 === void 0 ? void 0 : _this$d_value2.map(Number) : Number(this.d_value));
      this.$emit(active ? "tab-close" : "tab-open", {
        originalEvent: void 0,
        index: Number(newValue)
      });
    },
    // @deprecated since v4. Use new structure instead.
    isAccordionTab: function isAccordionTab(child) {
      return child.type.name === "AccordionTab";
    },
    getTabProp: function getTabProp(tab, name) {
      return tab.props ? tab.props[name] : void 0;
    },
    getKey: function getKey(tab, index) {
      return this.getTabProp(tab, "header") || index;
    },
    getHeaderPT: function getHeaderPT(tab, index) {
      var _this = this;
      return {
        root: mergeProps({
          onClick: function onClick(event) {
            return _this.onTabClick(event, index);
          }
        }, this.getTabProp(tab, "headerProps"), this.getTabPT(tab, "header", index)),
        toggleicon: mergeProps(this.getTabProp(tab, "headeractionprops"), this.getTabPT(tab, "headeraction", index))
      };
    },
    getContentPT: function getContentPT(tab, index) {
      return {
        root: mergeProps(this.getTabProp(tab, "contentProps"), this.getTabPT(tab, "toggleablecontent", index)),
        transition: this.getTabPT(tab, "transition", index),
        content: this.getTabPT(tab, "content", index)
      };
    },
    getTabPT: function getTabPT(tab, key, index) {
      var count = this.tabs.length;
      var tabMetaData = {
        props: tab.props || {},
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index,
          count,
          first: index === 0,
          last: index === count - 1,
          active: this.isItemActive("".concat(index))
        }
      };
      return mergeProps(this.ptm("accordiontab.".concat(key), tabMetaData), this.ptmo(this.getTabProp(tab, "pt"), key, tabMetaData));
    },
    onTabClick: function onTabClick(event, index) {
      this.$emit("tab-click", {
        originalEvent: event,
        index
      });
    }
  },
  computed: {
    // @deprecated since v4.
    tabs: function tabs() {
      var _this2 = this;
      return this.$slots["default"]().reduce(function(tabs2, child) {
        if (_this2.isAccordionTab(child)) {
          tabs2.push(child);
        } else if (child.children && child.children instanceof Array) {
          child.children.forEach(function(nestedChild) {
            if (_this2.isAccordionTab(nestedChild)) {
              tabs2.push(nestedChild);
            }
          });
        }
        return tabs2;
      }, []);
    },
    hasAccordionTab: function hasAccordionTab() {
      return this.tabs.length;
    }
  },
  components: {
    AccordionPanel: script6,
    AccordionHeader: script5,
    AccordionContent: script4,
    ChevronUpIcon: script3,
    ChevronRightIcon: script2
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AccordionHeader = resolveComponent("AccordionHeader");
  var _component_AccordionContent = resolveComponent("AccordionContent");
  var _component_AccordionPanel = resolveComponent("AccordionPanel");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [$options.hasAccordionTab ? (openBlock(true), createElementBlock(Fragment, {
    key: 0
  }, renderList($options.tabs, function(tab, i) {
    return openBlock(), createBlock(_component_AccordionPanel, {
      key: $options.getKey(tab, i),
      value: "".concat(i),
      pt: {
        root: $options.getTabPT(tab, "root", i)
      },
      disabled: $options.getTabProp(tab, "disabled")
    }, {
      "default": withCtx(function() {
        return [createVNode(_component_AccordionHeader, {
          "class": normalizeClass($options.getTabProp(tab, "headerClass")),
          pt: $options.getHeaderPT(tab, i)
        }, {
          toggleicon: withCtx(function(slotProps) {
            return [slotProps.active ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.collapseicon ? _ctx.$slots.collapseicon : _ctx.collapseIcon ? "span" : "ChevronDownIcon"), mergeProps({
              key: 0,
              "class": [_ctx.collapseIcon, slotProps["class"]],
              "aria-hidden": "true",
              ref_for: true
            }, $options.getTabPT(tab, "headericon", i)), null, 16, ["class"])) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.expandicon ? _ctx.$slots.expandicon : _ctx.expandIcon ? "span" : "ChevronUpIcon"), mergeProps({
              key: 1,
              "class": [_ctx.expandIcon, slotProps["class"]],
              "aria-hidden": "true",
              ref_for: true
            }, $options.getTabPT(tab, "headericon", i)), null, 16, ["class"]))];
          }),
          "default": withCtx(function() {
            return [tab.children && tab.children.headericon ? (openBlock(), createBlock(resolveDynamicComponent(tab.children.headericon), {
              key: 0,
              isTabActive: $options.isItemActive("".concat(i)),
              active: $options.isItemActive("".concat(i)),
              index: i
            }, null, 8, ["isTabActive", "active", "index"])) : createCommentVNode("", true), tab.props && tab.props.header ? (openBlock(), createElementBlock("span", mergeProps({
              key: 1,
              ref_for: true
            }, $options.getTabPT(tab, "headertitle", i)), toDisplayString(tab.props.header), 17)) : createCommentVNode("", true), tab.children && tab.children.header ? (openBlock(), createBlock(resolveDynamicComponent(tab.children.header), {
              key: 2
            })) : createCommentVNode("", true)];
          }),
          _: 2
        }, 1032, ["class", "pt"]), createVNode(_component_AccordionContent, {
          pt: $options.getContentPT(tab, i)
        }, {
          "default": withCtx(function() {
            return [(openBlock(), createBlock(resolveDynamicComponent(tab)))];
          }),
          _: 2
        }, 1032, ["pt"])];
      }),
      _: 2
    }, 1032, ["value", "pt", "disabled"]);
  }), 128)) : renderSlot(_ctx.$slots, "default", {
    key: 1
  })], 16);
}
script7.render = render;
export {
  script7 as default
};
//# sourceMappingURL=primevue_accordion.js.map
