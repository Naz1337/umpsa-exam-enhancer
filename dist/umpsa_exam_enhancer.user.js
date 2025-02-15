// ==UserScript==
// @name         UMPSA Exam Enhancer
// @namespace    https://github.com/Naz1337/umpsa-exam-enhancer
// @version      0.1.1
// @description  Improves the interface and functionality of the UMPSA exam paper website, making it easier for students to browse, search, and access past exam papers.
// @author       Naz
// @match        https://apps-oss-ump-edu-my.libraryumpsa.idm.oclc.org/exam/searchProcess.php
// @run-at       document-end
// @sandbox      DOM
// @grant        none
// ==/UserScript==  
(function() {
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.textContent = '#main_container {\r\n    width: 100%;\r\n    \r\n    display: flex;\r\n\r\n    justify-content: center;\r\n\r\n    padding: 0;\r\n    margin: 0;\r\n    \r\n}\r\n    iframe.svelte-1k6wdzs {\r\n        width: 100%;\r\n        height: 90dvh;\r\n        transition: height 0.3s ease-out, margin-top 0.3s ease-out;\r\n        margin-top: 0px;\r\n        \r\n        border-color: #fdc3d2;\r\n        border-width: 1px;\r\n\r\n        box-sizing: border-box;\r\n    }\r\n\r\n    .filename.svelte-1k6wdzs {\r\n        font-size: 1.25rem;\r\n        font-weight: 600;\r\n        color: #30030e;\r\n    }\r\n\r\n    .semester.svelte-1k6wdzs {\r\n        color: #670e24;\r\n        font-weight: 600;\r\n        margin-bottom: 1rem;\r\n    }\r\n\r\n    .faculty.svelte-1k6wdzs {\r\n        color: #a72545;\r\n        font-weight: 600;\r\n\r\n        font-size: 0.75rem;\r\n        letter-spacing: 0.025rem;\r\n    }\r\n\r\n    button.svelte-1k6wdzs {\r\n        all: unset;\r\n        background: white; /* Ensure background is explicitly white */\r\n        color: inherit; /* Keep text color the same as surrounding text */\r\n        font: inherit; /* Keep the font consistent */\r\n        cursor: pointer; /* Keep the pointer cursor for usability */\r\n        box-sizing: border-box;\r\n        display: block;\r\n    }\r\n\r\n    .card.svelte-1k6wdzs {\r\n        width: 100%;\r\n        padding: 1rem;\r\n        border: 1px solid #ccc;\r\n        border-radius: 0.5rem;\r\n        display: flex;\r\n\r\n        flex-direction: column;\r\n\r\n        box-shadow: 0px 5px 10px lightgray;\r\n    }\r\n\r\n    .card.svelte-1k6wdzs:hover {\r\n        box-shadow: 0px 7px 15px lightgray;\r\n    }\r\n\r\n    .svelte-1mvkby8 {\r\n        *,\r\n        *::before,\r\n        *::after {\r\n            box-sizing: border-box;\r\n        }\r\n\r\n        * {\r\n            line-height: 1.5;\r\n            font-family: system-ui, "Segoe UI", Roboto, \r\n                Helvetica, Arial, sans-serif, "Apple Color Emoji", \r\n                "Segoe UI Emoji", "Segoe UI Symbol";\r\n            margin: 0;\r\n        }\r\n    }\r\n\r\n    div.svelte-1mvkby8 {\r\n        flex: 1 1 auto;\r\n        \r\n        display: flex;\r\n        flex-direction: column;\r\n\r\n        gap: 1.5rem;\r\n\r\n        max-width: 900px;\r\n        min-width: 380px;\r\n\r\n    }\r\n/*$vite$:1*/';
  document.head.appendChild(__vite_style__);
  const DEV = false;
  var is_array = Array.isArray;
  var index_of = Array.prototype.indexOf;
  var array_from = Array.from;
  var define_property = Object.defineProperty;
  var get_descriptor = Object.getOwnPropertyDescriptor;
  var get_descriptors = Object.getOwnPropertyDescriptors;
  var get_prototype_of = Object.getPrototypeOf;
  function is_function(thing) {
    return typeof thing === "function";
  }
  const noop = () => {
  };
  function run_all(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i]();
    }
  }
  const DERIVED = 1 << 1;
  const EFFECT = 1 << 2;
  const RENDER_EFFECT = 1 << 3;
  const BLOCK_EFFECT = 1 << 4;
  const BRANCH_EFFECT = 1 << 5;
  const ROOT_EFFECT = 1 << 6;
  const BOUNDARY_EFFECT = 1 << 7;
  const UNOWNED = 1 << 8;
  const DISCONNECTED = 1 << 9;
  const CLEAN = 1 << 10;
  const DIRTY = 1 << 11;
  const MAYBE_DIRTY = 1 << 12;
  const INERT = 1 << 13;
  const DESTROYED = 1 << 14;
  const EFFECT_RAN = 1 << 15;
  const EFFECT_TRANSPARENT = 1 << 16;
  const HEAD_EFFECT = 1 << 19;
  const EFFECT_HAS_DERIVED = 1 << 20;
  const STATE_SYMBOL = Symbol("$state");
  const LOADING_ATTR_SYMBOL = Symbol("");
  function equals(value) {
    return value === this.v;
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
  }
  function safe_equals(value) {
    return !safe_not_equal(value, this.v);
  }
  function effect_update_depth_exceeded() {
    {
      throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
    }
  }
  function state_unsafe_local_read() {
    {
      throw new Error(`https://svelte.dev/e/state_unsafe_local_read`);
    }
  }
  function state_unsafe_mutation() {
    {
      throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
    }
  }
  let tracing_mode_flag = false;
  const EACH_ITEM_REACTIVE = 1;
  const EACH_INDEX_REACTIVE = 1 << 1;
  const EACH_ITEM_IMMUTABLE = 1 << 4;
  const TRANSITION_GLOBAL = 1 << 2;
  const TEMPLATE_USE_IMPORT_NODE = 1 << 1;
  const UNINITIALIZED = Symbol();
  let component_context = null;
  function set_component_context(context) {
    component_context = context;
  }
  function push(props, runes = false, fn) {
    component_context = {
      p: component_context,
      c: null,
      e: null,
      m: false,
      s: props,
      x: null,
      l: null
    };
  }
  function pop(component) {
    const context_stack_item = component_context;
    if (context_stack_item !== null) {
      const component_effects = context_stack_item.e;
      if (component_effects !== null) {
        var previous_effect = active_effect;
        var previous_reaction = active_reaction;
        context_stack_item.e = null;
        try {
          for (var i = 0; i < component_effects.length; i++) {
            var component_effect = component_effects[i];
            set_active_effect(component_effect.effect);
            set_active_reaction(component_effect.reaction);
            effect(component_effect.fn);
          }
        } finally {
          set_active_effect(previous_effect);
          set_active_reaction(previous_reaction);
        }
      }
      component_context = context_stack_item.p;
      context_stack_item.m = true;
    }
    return (
      /** @type {T} */
      {}
    );
  }
  function is_runes() {
    return true;
  }
  function source(v, stack) {
    var signal = {
      f: 0,
      // TODO ideally we could skip this altogether, but it causes type errors
      v,
      reactions: null,
      equals,
      rv: 0,
      wv: 0
    };
    return signal;
  }
  function state(v) {
    return /* @__PURE__ */ push_derived_source(source(v));
  }
  // @__NO_SIDE_EFFECTS__
  function mutable_source(initial_value, immutable = false) {
    const s = source(initial_value);
    if (!immutable) {
      s.equals = safe_equals;
    }
    return s;
  }
  // @__NO_SIDE_EFFECTS__
  function push_derived_source(source2) {
    if (active_reaction !== null && !untracking && (active_reaction.f & DERIVED) !== 0) {
      if (derived_sources === null) {
        set_derived_sources([source2]);
      } else {
        derived_sources.push(source2);
      }
    }
    return source2;
  }
  function set(source2, value) {
    if (active_reaction !== null && !untracking && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 && // If the source was created locally within the current derived, then
    // we allow the mutation.
    (derived_sources === null || !derived_sources.includes(source2))) {
      state_unsafe_mutation();
    }
    return internal_set(source2, value);
  }
  function internal_set(source2, value) {
    if (!source2.equals(value)) {
      source2.v;
      source2.v = value;
      source2.wv = increment_write_version();
      mark_reactions(source2, DIRTY);
      if (active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
        if (untracked_writes === null) {
          set_untracked_writes([source2]);
        } else {
          untracked_writes.push(source2);
        }
      }
    }
    return value;
  }
  function mark_reactions(signal, status) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    var length = reactions.length;
    for (var i = 0; i < length; i++) {
      var reaction = reactions[i];
      var flags = reaction.f;
      if ((flags & DIRTY) !== 0) continue;
      set_signal_status(reaction, status);
      if ((flags & (CLEAN | UNOWNED)) !== 0) {
        if ((flags & DERIVED) !== 0) {
          mark_reactions(
            /** @type {Derived} */
            reaction,
            MAYBE_DIRTY
          );
        } else {
          schedule_effect(
            /** @type {Effect} */
            reaction
          );
        }
      }
    }
  }
  let hydrating = false;
  var $window;
  var first_child_getter;
  var next_sibling_getter;
  function init_operations() {
    if ($window !== void 0) {
      return;
    }
    $window = window;
    var element_prototype = Element.prototype;
    var node_prototype = Node.prototype;
    first_child_getter = get_descriptor(node_prototype, "firstChild").get;
    next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
    element_prototype.__click = void 0;
    element_prototype.__className = "";
    element_prototype.__attributes = null;
    element_prototype.__styles = null;
    element_prototype.__e = void 0;
    Text.prototype.__t = void 0;
  }
  function create_text(value = "") {
    return document.createTextNode(value);
  }
  // @__NO_SIDE_EFFECTS__
  function get_first_child(node) {
    return first_child_getter.call(node);
  }
  // @__NO_SIDE_EFFECTS__
  function get_next_sibling(node) {
    return next_sibling_getter.call(node);
  }
  function child(node, is_text) {
    {
      return /* @__PURE__ */ get_first_child(node);
    }
  }
  function sibling(node, count = 1, is_text = false) {
    let next_sibling = node;
    while (count--) {
      next_sibling = /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(next_sibling);
    }
    {
      return next_sibling;
    }
  }
  function clear_text_content(node) {
    node.textContent = "";
  }
  // @__NO_SIDE_EFFECTS__
  function derived(fn) {
    var flags = DERIVED | DIRTY;
    var parent_derived = active_reaction !== null && (active_reaction.f & DERIVED) !== 0 ? (
      /** @type {Derived} */
      active_reaction
    ) : null;
    if (active_effect === null || parent_derived !== null && (parent_derived.f & UNOWNED) !== 0) {
      flags |= UNOWNED;
    } else {
      active_effect.f |= EFFECT_HAS_DERIVED;
    }
    const signal = {
      ctx: component_context,
      deps: null,
      effects: null,
      equals,
      f: flags,
      fn,
      reactions: null,
      rv: 0,
      v: (
        /** @type {V} */
        null
      ),
      wv: 0,
      parent: parent_derived ?? active_effect
    };
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function derived_safe_equal(fn) {
    const signal = /* @__PURE__ */ derived(fn);
    signal.equals = safe_equals;
    return signal;
  }
  function destroy_derived_effects(derived2) {
    var effects = derived2.effects;
    if (effects !== null) {
      derived2.effects = null;
      for (var i = 0; i < effects.length; i += 1) {
        destroy_effect(
          /** @type {Effect} */
          effects[i]
        );
      }
    }
  }
  function get_derived_parent_effect(derived2) {
    var parent = derived2.parent;
    while (parent !== null) {
      if ((parent.f & DERIVED) === 0) {
        return (
          /** @type {Effect} */
          parent
        );
      }
      parent = parent.parent;
    }
    return null;
  }
  function execute_derived(derived2) {
    var value;
    var prev_active_effect = active_effect;
    set_active_effect(get_derived_parent_effect(derived2));
    {
      try {
        destroy_derived_effects(derived2);
        value = update_reaction(derived2);
      } finally {
        set_active_effect(prev_active_effect);
      }
    }
    return value;
  }
  function update_derived(derived2) {
    var value = execute_derived(derived2);
    var status = (skip_reaction || (derived2.f & UNOWNED) !== 0) && derived2.deps !== null ? MAYBE_DIRTY : CLEAN;
    set_signal_status(derived2, status);
    if (!derived2.equals(value)) {
      derived2.v = value;
      derived2.wv = increment_write_version();
    }
  }
  function push_effect(effect2, parent_effect) {
    var parent_last = parent_effect.last;
    if (parent_last === null) {
      parent_effect.last = parent_effect.first = effect2;
    } else {
      parent_last.next = effect2;
      effect2.prev = parent_last;
      parent_effect.last = effect2;
    }
  }
  function create_effect(type, fn, sync, push2 = true) {
    var is_root = (type & ROOT_EFFECT) !== 0;
    var parent_effect = active_effect;
    var effect2 = {
      ctx: component_context,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: type | DIRTY,
      first: null,
      fn,
      last: null,
      next: null,
      parent: is_root ? null : parent_effect,
      prev: null,
      teardown: null,
      transitions: null,
      wv: 0
    };
    if (sync) {
      var previously_flushing_effect = is_flushing_effect;
      try {
        set_is_flushing_effect(true);
        update_effect(effect2);
        effect2.f |= EFFECT_RAN;
      } catch (e) {
        destroy_effect(effect2);
        throw e;
      } finally {
        set_is_flushing_effect(previously_flushing_effect);
      }
    } else if (fn !== null) {
      schedule_effect(effect2);
    }
    var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & (EFFECT_HAS_DERIVED | BOUNDARY_EFFECT)) === 0;
    if (!inert && !is_root && push2) {
      if (parent_effect !== null) {
        push_effect(effect2, parent_effect);
      }
      if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
        var derived2 = (
          /** @type {Derived} */
          active_reaction
        );
        (derived2.effects ?? (derived2.effects = [])).push(effect2);
      }
    }
    return effect2;
  }
  function teardown(fn) {
    const effect2 = create_effect(RENDER_EFFECT, null, false);
    set_signal_status(effect2, CLEAN);
    effect2.teardown = fn;
    return effect2;
  }
  function component_root(fn) {
    const effect2 = create_effect(ROOT_EFFECT, fn, true);
    return (options = {}) => {
      return new Promise((fulfil) => {
        if (options.outro) {
          pause_effect(effect2, () => {
            destroy_effect(effect2);
            fulfil(void 0);
          });
        } else {
          destroy_effect(effect2);
          fulfil(void 0);
        }
      });
    };
  }
  function effect(fn) {
    return create_effect(EFFECT, fn, false);
  }
  function render_effect(fn) {
    return create_effect(RENDER_EFFECT, fn, true);
  }
  function template_effect(fn, thunks = [], d = derived) {
    const deriveds = thunks.map(d);
    const effect2 = () => fn(...deriveds.map(get));
    return block(effect2);
  }
  function block(fn, flags = 0) {
    return create_effect(RENDER_EFFECT | BLOCK_EFFECT | flags, fn, true);
  }
  function branch(fn, push2 = true) {
    return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push2);
  }
  function execute_effect_teardown(effect2) {
    var teardown2 = effect2.teardown;
    if (teardown2 !== null) {
      const previous_reaction = active_reaction;
      set_active_reaction(null);
      try {
        teardown2.call(null);
      } finally {
        set_active_reaction(previous_reaction);
      }
    }
  }
  function destroy_effect_children(signal, remove_dom = false) {
    var effect2 = signal.first;
    signal.first = signal.last = null;
    while (effect2 !== null) {
      var next = effect2.next;
      destroy_effect(effect2, remove_dom);
      effect2 = next;
    }
  }
  function destroy_block_effect_children(signal) {
    var effect2 = signal.first;
    while (effect2 !== null) {
      var next = effect2.next;
      if ((effect2.f & BRANCH_EFFECT) === 0) {
        destroy_effect(effect2);
      }
      effect2 = next;
    }
  }
  function destroy_effect(effect2, remove_dom = true) {
    var removed = false;
    if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null) {
      var node = effect2.nodes_start;
      var end = effect2.nodes_end;
      while (node !== null) {
        var next = node === end ? null : (
          /** @type {TemplateNode} */
          /* @__PURE__ */ get_next_sibling(node)
        );
        node.remove();
        node = next;
      }
      removed = true;
    }
    destroy_effect_children(effect2, remove_dom && !removed);
    remove_reactions(effect2, 0);
    set_signal_status(effect2, DESTROYED);
    var transitions = effect2.transitions;
    if (transitions !== null) {
      for (const transition2 of transitions) {
        transition2.stop();
      }
    }
    execute_effect_teardown(effect2);
    var parent = effect2.parent;
    if (parent !== null && parent.first !== null) {
      unlink_effect(effect2);
    }
    effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = null;
  }
  function unlink_effect(effect2) {
    var parent = effect2.parent;
    var prev = effect2.prev;
    var next = effect2.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (parent !== null) {
      if (parent.first === effect2) parent.first = next;
      if (parent.last === effect2) parent.last = prev;
    }
  }
  function pause_effect(effect2, callback) {
    var transitions = [];
    pause_children(effect2, transitions, true);
    run_out_transitions(transitions, () => {
      destroy_effect(effect2);
      if (callback) callback();
    });
  }
  function run_out_transitions(transitions, fn) {
    var remaining = transitions.length;
    if (remaining > 0) {
      var check = () => --remaining || fn();
      for (var transition2 of transitions) {
        transition2.out(check);
      }
    } else {
      fn();
    }
  }
  function pause_children(effect2, transitions, local) {
    if ((effect2.f & INERT) !== 0) return;
    effect2.f ^= INERT;
    if (effect2.transitions !== null) {
      for (const transition2 of effect2.transitions) {
        if (transition2.is_global || local) {
          transitions.push(transition2);
        }
      }
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      pause_children(child2, transitions, transparent ? local : false);
      child2 = sibling2;
    }
  }
  function resume_effect(effect2) {
    resume_children(effect2, true);
  }
  function resume_children(effect2, local) {
    if ((effect2.f & INERT) === 0) return;
    effect2.f ^= INERT;
    if ((effect2.f & CLEAN) === 0) {
      effect2.f ^= CLEAN;
    }
    if (check_dirtiness(effect2)) {
      set_signal_status(effect2, DIRTY);
      schedule_effect(effect2);
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      resume_children(child2, transparent ? local : false);
      child2 = sibling2;
    }
    if (effect2.transitions !== null) {
      for (const transition2 of effect2.transitions) {
        if (transition2.is_global || local) {
          transition2.in();
        }
      }
    }
  }
  let is_micro_task_queued$1 = false;
  let current_queued_micro_tasks = [];
  function process_micro_tasks() {
    is_micro_task_queued$1 = false;
    const tasks = current_queued_micro_tasks.slice();
    current_queued_micro_tasks = [];
    run_all(tasks);
  }
  function queue_micro_task(fn) {
    if (!is_micro_task_queued$1) {
      is_micro_task_queued$1 = true;
      queueMicrotask(process_micro_tasks);
    }
    current_queued_micro_tasks.push(fn);
  }
  let is_throwing_error = false;
  let is_micro_task_queued = false;
  let last_scheduled_effect = null;
  let is_flushing_effect = false;
  function set_is_flushing_effect(value) {
    is_flushing_effect = value;
  }
  let queued_root_effects = [];
  let flush_count = 0;
  let dev_effect_stack = [];
  let active_reaction = null;
  let untracking = false;
  function set_active_reaction(reaction) {
    active_reaction = reaction;
  }
  let active_effect = null;
  function set_active_effect(effect2) {
    active_effect = effect2;
  }
  let derived_sources = null;
  function set_derived_sources(sources) {
    derived_sources = sources;
  }
  let new_deps = null;
  let skipped_deps = 0;
  let untracked_writes = null;
  function set_untracked_writes(value) {
    untracked_writes = value;
  }
  let write_version = 1;
  let read_version = 0;
  let skip_reaction = false;
  function increment_write_version() {
    return ++write_version;
  }
  function check_dirtiness(reaction) {
    var _a;
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) {
      return true;
    }
    if ((flags & MAYBE_DIRTY) !== 0) {
      var dependencies = reaction.deps;
      var is_unowned = (flags & UNOWNED) !== 0;
      if (dependencies !== null) {
        var i;
        var dependency;
        var is_disconnected = (flags & DISCONNECTED) !== 0;
        var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
        var length = dependencies.length;
        if (is_disconnected || is_unowned_connected) {
          for (i = 0; i < length; i++) {
            dependency = dependencies[i];
            if (is_disconnected || !((_a = dependency == null ? void 0 : dependency.reactions) == null ? void 0 : _a.includes(reaction))) {
              (dependency.reactions ?? (dependency.reactions = [])).push(reaction);
            }
          }
          if (is_disconnected) {
            reaction.f ^= DISCONNECTED;
          }
        }
        for (i = 0; i < length; i++) {
          dependency = dependencies[i];
          if (check_dirtiness(
            /** @type {Derived} */
            dependency
          )) {
            update_derived(
              /** @type {Derived} */
              dependency
            );
          }
          if (dependency.wv > reaction.wv) {
            return true;
          }
        }
      }
      if (!is_unowned || active_effect !== null && !skip_reaction) {
        set_signal_status(reaction, CLEAN);
      }
    }
    return false;
  }
  function propagate_error(error, effect2) {
    var current = effect2;
    while (current !== null) {
      if ((current.f & BOUNDARY_EFFECT) !== 0) {
        try {
          current.fn(error);
          return;
        } catch {
          current.f ^= BOUNDARY_EFFECT;
        }
      }
      current = current.parent;
    }
    is_throwing_error = false;
    throw error;
  }
  function should_rethrow_error(effect2) {
    return (effect2.f & DESTROYED) === 0 && (effect2.parent === null || (effect2.parent.f & BOUNDARY_EFFECT) === 0);
  }
  function handle_error(error, effect2, previous_effect, component_context2) {
    if (is_throwing_error) {
      if (previous_effect === null) {
        is_throwing_error = false;
      }
      if (should_rethrow_error(effect2)) {
        throw error;
      }
      return;
    }
    if (previous_effect !== null) {
      is_throwing_error = true;
    }
    {
      propagate_error(error, effect2);
      return;
    }
  }
  function schedule_possible_effect_self_invalidation(signal, effect2, depth = 0) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    for (var i = 0; i < reactions.length; i++) {
      var reaction = reactions[i];
      if ((reaction.f & DERIVED) !== 0) {
        schedule_possible_effect_self_invalidation(
          /** @type {Derived} */
          reaction,
          effect2,
          depth + 1
        );
      } else if (effect2 === reaction) {
        if (depth === 0) {
          set_signal_status(reaction, DIRTY);
        } else if ((reaction.f & CLEAN) !== 0) {
          set_signal_status(reaction, MAYBE_DIRTY);
        }
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
  function update_reaction(reaction) {
    var _a;
    var previous_deps = new_deps;
    var previous_skipped_deps = skipped_deps;
    var previous_untracked_writes = untracked_writes;
    var previous_reaction = active_reaction;
    var previous_skip_reaction = skip_reaction;
    var prev_derived_sources = derived_sources;
    var previous_component_context = component_context;
    var previous_untracking = untracking;
    var flags = reaction.f;
    new_deps = /** @type {null | Value[]} */
    null;
    skipped_deps = 0;
    untracked_writes = null;
    active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
    skip_reaction = (flags & UNOWNED) !== 0 && (!is_flushing_effect || // If we were previously not in a reactive context and we're reading an unowned derived
    // that was created inside another reaction, then we don't fully know the real owner and thus
    // we need to skip adding any reactions for this unowned
    (previous_reaction === null || previous_untracking) && /** @type {Derived} */
    reaction.parent !== null);
    derived_sources = null;
    set_component_context(reaction.ctx);
    untracking = false;
    read_version++;
    try {
      var result = (
        /** @type {Function} */
        (0, reaction.fn)()
      );
      var deps = reaction.deps;
      if (new_deps !== null) {
        var i;
        remove_reactions(reaction, skipped_deps);
        if (deps !== null && skipped_deps > 0) {
          deps.length = skipped_deps + new_deps.length;
          for (i = 0; i < new_deps.length; i++) {
            deps[skipped_deps + i] = new_deps[i];
          }
        } else {
          reaction.deps = deps = new_deps;
        }
        if (!skip_reaction) {
          for (i = skipped_deps; i < deps.length; i++) {
            ((_a = deps[i]).reactions ?? (_a.reactions = [])).push(reaction);
          }
        }
      } else if (deps !== null && skipped_deps < deps.length) {
        remove_reactions(reaction, skipped_deps);
        deps.length = skipped_deps;
      }
      if (is_runes() && untracked_writes !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
        for (i = 0; i < /** @type {Source[]} */
        untracked_writes.length; i++) {
          schedule_possible_effect_self_invalidation(
            untracked_writes[i],
            /** @type {Effect} */
            reaction
          );
        }
      }
      if (previous_reaction !== null) {
        read_version++;
      }
      return result;
    } finally {
      new_deps = previous_deps;
      skipped_deps = previous_skipped_deps;
      untracked_writes = previous_untracked_writes;
      active_reaction = previous_reaction;
      skip_reaction = previous_skip_reaction;
      derived_sources = prev_derived_sources;
      set_component_context(previous_component_context);
      untracking = previous_untracking;
    }
  }
  function remove_reaction(signal, dependency) {
    let reactions = dependency.reactions;
    if (reactions !== null) {
      var index2 = index_of.call(reactions, signal);
      if (index2 !== -1) {
        var new_length = reactions.length - 1;
        if (new_length === 0) {
          reactions = dependency.reactions = null;
        } else {
          reactions[index2] = reactions[new_length];
          reactions.pop();
        }
      }
    }
    if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
    // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
    // allows us to skip the expensive work of disconnecting and immediately reconnecting it
    (new_deps === null || !new_deps.includes(dependency))) {
      set_signal_status(dependency, MAYBE_DIRTY);
      if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
        dependency.f ^= DISCONNECTED;
      }
      destroy_derived_effects(
        /** @type {Derived} **/
        dependency
      );
      remove_reactions(
        /** @type {Derived} **/
        dependency,
        0
      );
    }
  }
  function remove_reactions(signal, start_index) {
    var dependencies = signal.deps;
    if (dependencies === null) return;
    for (var i = start_index; i < dependencies.length; i++) {
      remove_reaction(signal, dependencies[i]);
    }
  }
  function update_effect(effect2) {
    var flags = effect2.f;
    if ((flags & DESTROYED) !== 0) {
      return;
    }
    set_signal_status(effect2, CLEAN);
    var previous_effect = active_effect;
    var previous_component_context = component_context;
    active_effect = effect2;
    try {
      if ((flags & BLOCK_EFFECT) !== 0) {
        destroy_block_effect_children(effect2);
      } else {
        destroy_effect_children(effect2);
      }
      execute_effect_teardown(effect2);
      var teardown2 = update_reaction(effect2);
      effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
      effect2.wv = write_version;
      var deps = effect2.deps;
      var dep;
      if (DEV && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && deps !== null) ;
      if (DEV) ;
    } catch (error) {
      handle_error(error, effect2, previous_effect, previous_component_context || effect2.ctx);
    } finally {
      active_effect = previous_effect;
    }
  }
  function infinite_loop_guard() {
    if (flush_count > 1e3) {
      flush_count = 0;
      try {
        effect_update_depth_exceeded();
      } catch (error) {
        if (last_scheduled_effect !== null) {
          {
            handle_error(error, last_scheduled_effect, null);
          }
        } else {
          throw error;
        }
      }
    }
    flush_count++;
  }
  function flush_queued_root_effects(root_effects) {
    var length = root_effects.length;
    if (length === 0) {
      return;
    }
    infinite_loop_guard();
    var previously_flushing_effect = is_flushing_effect;
    is_flushing_effect = true;
    try {
      for (var i = 0; i < length; i++) {
        var effect2 = root_effects[i];
        if ((effect2.f & CLEAN) === 0) {
          effect2.f ^= CLEAN;
        }
        var collected_effects = [];
        process_effects(effect2, collected_effects);
        flush_queued_effects(collected_effects);
      }
    } finally {
      is_flushing_effect = previously_flushing_effect;
    }
  }
  function flush_queued_effects(effects) {
    var length = effects.length;
    if (length === 0) return;
    for (var i = 0; i < length; i++) {
      var effect2 = effects[i];
      if ((effect2.f & (DESTROYED | INERT)) === 0) {
        try {
          if (check_dirtiness(effect2)) {
            update_effect(effect2);
            if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
              if (effect2.teardown === null) {
                unlink_effect(effect2);
              } else {
                effect2.fn = null;
              }
            }
          }
        } catch (error) {
          handle_error(error, effect2, null, effect2.ctx);
        }
      }
    }
  }
  function process_deferred() {
    is_micro_task_queued = false;
    if (flush_count > 1001) {
      return;
    }
    const previous_queued_root_effects = queued_root_effects;
    queued_root_effects = [];
    flush_queued_root_effects(previous_queued_root_effects);
    if (!is_micro_task_queued) {
      flush_count = 0;
      last_scheduled_effect = null;
    }
  }
  function schedule_effect(signal) {
    {
      if (!is_micro_task_queued) {
        is_micro_task_queued = true;
        queueMicrotask(process_deferred);
      }
    }
    last_scheduled_effect = signal;
    var effect2 = signal;
    while (effect2.parent !== null) {
      effect2 = effect2.parent;
      var flags = effect2.f;
      if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
        if ((flags & CLEAN) === 0) return;
        effect2.f ^= CLEAN;
      }
    }
    queued_root_effects.push(effect2);
  }
  function process_effects(effect2, collected_effects) {
    var current_effect = effect2.first;
    var effects = [];
    main_loop: while (current_effect !== null) {
      var flags = current_effect.f;
      var is_branch = (flags & BRANCH_EFFECT) !== 0;
      var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
      var sibling2 = current_effect.next;
      if (!is_skippable_branch && (flags & INERT) === 0) {
        if ((flags & RENDER_EFFECT) !== 0) {
          if (is_branch) {
            current_effect.f ^= CLEAN;
          } else {
            var previous_active_reaction = active_reaction;
            try {
              active_reaction = current_effect;
              if (check_dirtiness(current_effect)) {
                update_effect(current_effect);
              }
            } catch (error) {
              handle_error(error, current_effect, null, current_effect.ctx);
            } finally {
              active_reaction = previous_active_reaction;
            }
          }
          var child2 = current_effect.first;
          if (child2 !== null) {
            current_effect = child2;
            continue;
          }
        } else if ((flags & EFFECT) !== 0) {
          effects.push(current_effect);
        }
      }
      if (sibling2 === null) {
        let parent = current_effect.parent;
        while (parent !== null) {
          if (effect2 === parent) {
            break main_loop;
          }
          var parent_sibling = parent.next;
          if (parent_sibling !== null) {
            current_effect = parent_sibling;
            continue main_loop;
          }
          parent = parent.parent;
        }
      }
      current_effect = sibling2;
    }
    for (var i = 0; i < effects.length; i++) {
      child2 = effects[i];
      collected_effects.push(child2);
      process_effects(child2, collected_effects);
    }
  }
  function get(signal) {
    var flags = signal.f;
    var is_derived = (flags & DERIVED) !== 0;
    if (active_reaction !== null && !untracking) {
      if (derived_sources !== null && derived_sources.includes(signal)) {
        state_unsafe_local_read();
      }
      var deps = active_reaction.deps;
      if (signal.rv < read_version) {
        signal.rv = read_version;
        if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
          skipped_deps++;
        } else if (new_deps === null) {
          new_deps = [signal];
        } else {
          new_deps.push(signal);
        }
      }
    } else if (is_derived && /** @type {Derived} */
    signal.deps === null && /** @type {Derived} */
    signal.effects === null) {
      var derived2 = (
        /** @type {Derived} */
        signal
      );
      var parent = derived2.parent;
      if (parent !== null && (parent.f & UNOWNED) === 0) {
        derived2.f ^= UNOWNED;
      }
    }
    if (is_derived) {
      derived2 = /** @type {Derived} */
      signal;
      if (check_dirtiness(derived2)) {
        update_derived(derived2);
      }
    }
    return signal.v;
  }
  function untrack(fn) {
    var previous_untracking = untracking;
    try {
      untracking = true;
      return fn();
    } finally {
      untracking = previous_untracking;
    }
  }
  const STATUS_MASK = -7169;
  function set_signal_status(signal, status) {
    signal.f = signal.f & STATUS_MASK | status;
  }
  const PASSIVE_EVENTS = ["touchstart", "touchmove"];
  function is_passive_event(name) {
    return PASSIVE_EVENTS.includes(name);
  }
  function without_reactive_context(fn) {
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      return fn();
    } finally {
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  const all_registered_events = /* @__PURE__ */ new Set();
  const root_event_handles = /* @__PURE__ */ new Set();
  function create_event(event_name, dom, handler, options = {}) {
    function target_handler(event2) {
      if (!options.capture) {
        handle_event_propagation.call(dom, event2);
      }
      if (!event2.cancelBubble) {
        return without_reactive_context(() => {
          return handler == null ? void 0 : handler.call(this, event2);
        });
      }
    }
    if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") {
      queue_micro_task(() => {
        dom.addEventListener(event_name, target_handler, options);
      });
    } else {
      dom.addEventListener(event_name, target_handler, options);
    }
    return target_handler;
  }
  function event(event_name, dom, handler, capture, passive) {
    var options = { capture, passive };
    var target_handler = create_event(event_name, dom, handler, options);
    if (dom === document.body || dom === window || dom === document) {
      teardown(() => {
        dom.removeEventListener(event_name, target_handler, options);
      });
    }
  }
  function delegate(events) {
    for (var i = 0; i < events.length; i++) {
      all_registered_events.add(events[i]);
    }
    for (var fn of root_event_handles) {
      fn(events);
    }
  }
  function handle_event_propagation(event2) {
    var _a;
    var handler_element = this;
    var owner_document = (
      /** @type {Node} */
      handler_element.ownerDocument
    );
    var event_name = event2.type;
    var path = ((_a = event2.composedPath) == null ? void 0 : _a.call(event2)) || [];
    var current_target = (
      /** @type {null | Element} */
      path[0] || event2.target
    );
    var path_idx = 0;
    var handled_at = event2.__root;
    if (handled_at) {
      var at_idx = path.indexOf(handled_at);
      if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
      window)) {
        event2.__root = handler_element;
        return;
      }
      var handler_idx = path.indexOf(handler_element);
      if (handler_idx === -1) {
        return;
      }
      if (at_idx <= handler_idx) {
        path_idx = at_idx;
      }
    }
    current_target = /** @type {Element} */
    path[path_idx] || event2.target;
    if (current_target === handler_element) return;
    define_property(event2, "currentTarget", {
      configurable: true,
      get() {
        return current_target || owner_document;
      }
    });
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      var throw_error;
      var other_errors = [];
      while (current_target !== null) {
        var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
        current_target.host || null;
        try {
          var delegated = current_target["__" + event_name];
          if (delegated !== void 0 && !/** @type {any} */
          current_target.disabled) {
            if (is_array(delegated)) {
              var [fn, ...data] = delegated;
              fn.apply(current_target, [event2, ...data]);
            } else {
              delegated.call(current_target, event2);
            }
          }
        } catch (error) {
          if (throw_error) {
            other_errors.push(error);
          } else {
            throw_error = error;
          }
        }
        if (event2.cancelBubble || parent_element === handler_element || parent_element === null) {
          break;
        }
        current_target = parent_element;
      }
      if (throw_error) {
        for (let error of other_errors) {
          queueMicrotask(() => {
            throw error;
          });
        }
        throw throw_error;
      }
    } finally {
      event2.__root = handler_element;
      delete event2.currentTarget;
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  function head(render_fn) {
    var anchor;
    {
      anchor = document.head.appendChild(create_text());
    }
    try {
      block(() => render_fn(anchor), HEAD_EFFECT);
    } finally {
    }
  }
  function create_fragment_from_html(html) {
    var elem = document.createElement("template");
    elem.innerHTML = html;
    return elem.content;
  }
  function assign_nodes(start, end) {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    if (effect2.nodes_start === null) {
      effect2.nodes_start = start;
      effect2.nodes_end = end;
    }
  }
  // @__NO_SIDE_EFFECTS__
  function template(content, flags) {
    var use_import_node = (flags & TEMPLATE_USE_IMPORT_NODE) !== 0;
    var node;
    var has_start = !content.startsWith("<!>");
    return () => {
      if (node === void 0) {
        node = create_fragment_from_html(has_start ? content : "<!>" + content);
        node = /** @type {Node} */
        /* @__PURE__ */ get_first_child(node);
      }
      var clone = (
        /** @type {TemplateNode} */
        use_import_node ? document.importNode(node, true) : node.cloneNode(true)
      );
      {
        assign_nodes(clone, clone);
      }
      return clone;
    };
  }
  function append(anchor, dom) {
    if (anchor === null) {
      return;
    }
    anchor.before(
      /** @type {Node} */
      dom
    );
  }
  let should_intro = true;
  function set_text(text, value) {
    var str = value == null ? "" : typeof value === "object" ? value + "" : value;
    if (str !== (text.__t ?? (text.__t = text.nodeValue))) {
      text.__t = str;
      text.nodeValue = str + "";
    }
  }
  function mount(component, options) {
    return _mount(component, options);
  }
  const document_listeners = /* @__PURE__ */ new Map();
  function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
    init_operations();
    var registered_events = /* @__PURE__ */ new Set();
    var event_handle = (events2) => {
      for (var i = 0; i < events2.length; i++) {
        var event_name = events2[i];
        if (registered_events.has(event_name)) continue;
        registered_events.add(event_name);
        var passive = is_passive_event(event_name);
        target.addEventListener(event_name, handle_event_propagation, { passive });
        var n = document_listeners.get(event_name);
        if (n === void 0) {
          document.addEventListener(event_name, handle_event_propagation, { passive });
          document_listeners.set(event_name, 1);
        } else {
          document_listeners.set(event_name, n + 1);
        }
      }
    };
    event_handle(array_from(all_registered_events));
    root_event_handles.add(event_handle);
    var component = void 0;
    var unmount = component_root(() => {
      var anchor_node = anchor ?? target.appendChild(create_text());
      branch(() => {
        if (context) {
          push({});
          var ctx = (
            /** @type {ComponentContext} */
            component_context
          );
          ctx.c = context;
        }
        if (events) {
          props.$$events = events;
        }
        should_intro = intro;
        component = Component(anchor_node, props) || {};
        should_intro = true;
        if (context) {
          pop();
        }
      });
      return () => {
        var _a;
        for (var event_name of registered_events) {
          target.removeEventListener(event_name, handle_event_propagation);
          var n = (
            /** @type {number} */
            document_listeners.get(event_name)
          );
          if (--n === 0) {
            document.removeEventListener(event_name, handle_event_propagation);
            document_listeners.delete(event_name);
          } else {
            document_listeners.set(event_name, n);
          }
        }
        root_event_handles.delete(event_handle);
        if (anchor_node !== anchor) {
          (_a = anchor_node.parentNode) == null ? void 0 : _a.removeChild(anchor_node);
        }
      };
    });
    mounted_components.set(component, unmount);
    return component;
  }
  let mounted_components = /* @__PURE__ */ new WeakMap();
  function if_block(node, fn, elseif = false) {
    var anchor = node;
    var consequent_effect = null;
    var alternate_effect = null;
    var condition = UNINITIALIZED;
    var flags = elseif ? EFFECT_TRANSPARENT : 0;
    var has_branch = false;
    const set_branch = (fn2, flag = true) => {
      has_branch = true;
      update_branch(flag, fn2);
    };
    const update_branch = (new_condition, fn2) => {
      if (condition === (condition = new_condition)) return;
      if (condition) {
        if (consequent_effect) {
          resume_effect(consequent_effect);
        } else if (fn2) {
          consequent_effect = branch(() => fn2(anchor));
        }
        if (alternate_effect) {
          pause_effect(alternate_effect, () => {
            alternate_effect = null;
          });
        }
      } else {
        if (alternate_effect) {
          resume_effect(alternate_effect);
        } else if (fn2) {
          alternate_effect = branch(() => fn2(anchor));
        }
        if (consequent_effect) {
          pause_effect(consequent_effect, () => {
            consequent_effect = null;
          });
        }
      }
    };
    block(() => {
      has_branch = false;
      fn(set_branch);
      if (!has_branch) {
        update_branch(null, null);
      }
    }, flags);
  }
  function index(_, i) {
    return i;
  }
  function pause_effects(state2, items, controlled_anchor, items_map) {
    var transitions = [];
    var length = items.length;
    for (var i = 0; i < length; i++) {
      pause_children(items[i].e, transitions, true);
    }
    var is_controlled = length > 0 && transitions.length === 0 && controlled_anchor !== null;
    if (is_controlled) {
      var parent_node = (
        /** @type {Element} */
        /** @type {Element} */
        controlled_anchor.parentNode
      );
      clear_text_content(parent_node);
      parent_node.append(
        /** @type {Element} */
        controlled_anchor
      );
      items_map.clear();
      link(state2, items[0].prev, items[length - 1].next);
    }
    run_out_transitions(transitions, () => {
      for (var i2 = 0; i2 < length; i2++) {
        var item = items[i2];
        if (!is_controlled) {
          items_map.delete(item.k);
          link(state2, item.prev, item.next);
        }
        destroy_effect(item.e, !is_controlled);
      }
    });
  }
  function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
    var anchor = node;
    var state2 = { items: /* @__PURE__ */ new Map(), first: null };
    {
      var parent_node = (
        /** @type {Element} */
        node
      );
      anchor = parent_node.appendChild(create_text());
    }
    var fallback = null;
    var was_empty = false;
    var each_array = /* @__PURE__ */ derived_safe_equal(() => {
      var collection = get_collection();
      return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
    });
    block(() => {
      var array = get(each_array);
      var length = array.length;
      if (was_empty && length === 0) {
        return;
      }
      was_empty = length === 0;
      {
        reconcile(array, state2, anchor, render_fn, flags, get_key, get_collection);
      }
      if (fallback_fn !== null) {
        if (length === 0) {
          if (fallback) {
            resume_effect(fallback);
          } else {
            fallback = branch(() => fallback_fn(anchor));
          }
        } else if (fallback !== null) {
          pause_effect(fallback, () => {
            fallback = null;
          });
        }
      }
      get(each_array);
    });
  }
  function reconcile(array, state2, anchor, render_fn, flags, get_key, get_collection) {
    var length = array.length;
    var items = state2.items;
    var first = state2.first;
    var current = first;
    var seen;
    var prev = null;
    var matched = [];
    var stashed = [];
    var value;
    var key;
    var item;
    var i;
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key = get_key(value, i);
      item = items.get(key);
      if (item === void 0) {
        var child_anchor = current ? (
          /** @type {TemplateNode} */
          current.e.nodes_start
        ) : anchor;
        prev = create_item(
          child_anchor,
          state2,
          prev,
          prev === null ? state2.first : prev.next,
          value,
          key,
          i,
          render_fn,
          flags,
          get_collection
        );
        items.set(key, prev);
        matched = [];
        stashed = [];
        current = prev.next;
        continue;
      }
      {
        update_item(item, value, i);
      }
      if ((item.e.f & INERT) !== 0) {
        resume_effect(item.e);
      }
      if (item !== current) {
        if (seen !== void 0 && seen.has(item)) {
          if (matched.length < stashed.length) {
            var start = stashed[0];
            var j;
            prev = start.prev;
            var a = matched[0];
            var b = matched[matched.length - 1];
            for (j = 0; j < matched.length; j += 1) {
              move(matched[j], start, anchor);
            }
            for (j = 0; j < stashed.length; j += 1) {
              seen.delete(stashed[j]);
            }
            link(state2, a.prev, b.next);
            link(state2, prev, a);
            link(state2, b, start);
            current = start;
            prev = b;
            i -= 1;
            matched = [];
            stashed = [];
          } else {
            seen.delete(item);
            move(item, current, anchor);
            link(state2, item.prev, item.next);
            link(state2, item, prev === null ? state2.first : prev.next);
            link(state2, prev, item);
            prev = item;
          }
          continue;
        }
        matched = [];
        stashed = [];
        while (current !== null && current.k !== key) {
          if ((current.e.f & INERT) === 0) {
            (seen ?? (seen = /* @__PURE__ */ new Set())).add(current);
          }
          stashed.push(current);
          current = current.next;
        }
        if (current === null) {
          continue;
        }
        item = current;
      }
      matched.push(item);
      prev = item;
      current = item.next;
    }
    if (current !== null || seen !== void 0) {
      var to_destroy = seen === void 0 ? [] : array_from(seen);
      while (current !== null) {
        if ((current.e.f & INERT) === 0) {
          to_destroy.push(current);
        }
        current = current.next;
      }
      var destroy_length = to_destroy.length;
      if (destroy_length > 0) {
        var controlled_anchor = length === 0 ? anchor : null;
        pause_effects(state2, to_destroy, controlled_anchor, items);
      }
    }
    active_effect.first = state2.first && state2.first.e;
    active_effect.last = prev && prev.e;
  }
  function update_item(item, value, index2, type) {
    {
      internal_set(item.v, value);
    }
    {
      item.i = index2;
    }
  }
  function create_item(anchor, state2, prev, next, value, key, index2, render_fn, flags, get_collection) {
    var reactive = (flags & EACH_ITEM_REACTIVE) !== 0;
    var mutable = (flags & EACH_ITEM_IMMUTABLE) === 0;
    var v = reactive ? mutable ? /* @__PURE__ */ mutable_source(value) : source(value) : value;
    var i = (flags & EACH_INDEX_REACTIVE) === 0 ? index2 : source(index2);
    var item = {
      i,
      v,
      k: key,
      a: null,
      // @ts-expect-error
      e: null,
      prev,
      next
    };
    try {
      item.e = branch(() => render_fn(anchor, v, i, get_collection), hydrating);
      item.e.prev = prev && prev.e;
      item.e.next = next && next.e;
      if (prev === null) {
        state2.first = item;
      } else {
        prev.next = item;
        prev.e.next = item.e;
      }
      if (next !== null) {
        next.prev = item;
        next.e.prev = item.e;
      }
      return item;
    } finally {
    }
  }
  function move(item, next, anchor) {
    var end = item.next ? (
      /** @type {TemplateNode} */
      item.next.e.nodes_start
    ) : anchor;
    var dest = next ? (
      /** @type {TemplateNode} */
      next.e.nodes_start
    ) : anchor;
    var node = (
      /** @type {TemplateNode} */
      item.e.nodes_start
    );
    while (node !== end) {
      var next_node = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node)
      );
      dest.before(node);
      node = next_node;
    }
  }
  function link(state2, prev, next) {
    if (prev === null) {
      state2.first = next;
    } else {
      prev.next = next;
      prev.e.next = next && next.e;
    }
    if (next !== null) {
      next.prev = prev;
      next.e.prev = prev && prev.e;
    }
  }
  function set_attribute(element, attribute, value, skip_warning) {
    var attributes = element.__attributes ?? (element.__attributes = {});
    if (attributes[attribute] === (attributes[attribute] = value)) return;
    if (attribute === "style" && "__styles" in element) {
      element.__styles = {};
    }
    if (attribute === "loading") {
      element[LOADING_ATTR_SYMBOL] = value;
    }
    if (value == null) {
      element.removeAttribute(attribute);
    } else if (typeof value !== "string" && get_setters(element).includes(attribute)) {
      element[attribute] = value;
    } else {
      element.setAttribute(attribute, value);
    }
  }
  var setters_cache = /* @__PURE__ */ new Map();
  function get_setters(element) {
    var setters = setters_cache.get(element.nodeName);
    if (setters) return setters;
    setters_cache.set(element.nodeName, setters = []);
    var descriptors;
    var proto = element;
    var element_proto = Element.prototype;
    while (element_proto !== proto) {
      descriptors = get_descriptors(proto);
      for (var key in descriptors) {
        if (descriptors[key].set) {
          setters.push(key);
        }
      }
      proto = get_prototype_of(proto);
    }
    return setters;
  }
  const now = () => performance.now();
  const raf = {
    // don't access requestAnimationFrame eagerly outside method
    // this allows basic testing of user code without JSDOM
    // bunder will eval and remove ternary when the user's app is built
    tick: (
      /** @param {any} _ */
      (_) => requestAnimationFrame(_)
    ),
    now: () => now(),
    tasks: /* @__PURE__ */ new Set()
  };
  function run_tasks() {
    const now2 = raf.now();
    raf.tasks.forEach((task) => {
      if (!task.c(now2)) {
        raf.tasks.delete(task);
        task.f();
      }
    });
    if (raf.tasks.size !== 0) {
      raf.tick(run_tasks);
    }
  }
  function loop(callback) {
    let task;
    if (raf.tasks.size === 0) {
      raf.tick(run_tasks);
    }
    return {
      promise: new Promise((fulfill) => {
        raf.tasks.add(task = { c: callback, f: fulfill });
      }),
      abort() {
        raf.tasks.delete(task);
      }
    };
  }
  function dispatch_event(element, type) {
    element.dispatchEvent(new CustomEvent(type));
  }
  function css_property_to_camelcase(style) {
    if (style === "float") return "cssFloat";
    if (style === "offset") return "cssOffset";
    if (style.startsWith("--")) return style;
    const parts = style.split("-");
    if (parts.length === 1) return parts[0];
    return parts[0] + parts.slice(1).map(
      /** @param {any} word */
      (word) => word[0].toUpperCase() + word.slice(1)
    ).join("");
  }
  function css_to_keyframe(css) {
    const keyframe = {};
    const parts = css.split(";");
    for (const part of parts) {
      const [property, value] = part.split(":");
      if (!property || value === void 0) break;
      const formatted_property = css_property_to_camelcase(property.trim());
      keyframe[formatted_property] = value.trim();
    }
    return keyframe;
  }
  const linear = (t) => t;
  function transition(flags, element, get_fn, get_params) {
    var is_global = (flags & TRANSITION_GLOBAL) !== 0;
    var direction = "both";
    var current_options;
    var inert = element.inert;
    var overflow = element.style.overflow;
    var intro;
    var outro;
    function get_options() {
      var previous_reaction = active_reaction;
      var previous_effect = active_effect;
      set_active_reaction(null);
      set_active_effect(null);
      try {
        return current_options ?? (current_options = get_fn()(element, (get_params == null ? void 0 : get_params()) ?? /** @type {P} */
        {}, {
          direction
        }));
      } finally {
        set_active_reaction(previous_reaction);
        set_active_effect(previous_effect);
      }
    }
    var transition2 = {
      is_global,
      in() {
        element.inert = inert;
        dispatch_event(element, "introstart");
        intro = animate(element, get_options(), outro, 1, () => {
          dispatch_event(element, "introend");
          intro == null ? void 0 : intro.abort();
          intro = current_options = void 0;
          element.style.overflow = overflow;
        });
      },
      out(fn) {
        element.inert = true;
        dispatch_event(element, "outrostart");
        outro = animate(element, get_options(), intro, 0, () => {
          dispatch_event(element, "outroend");
          fn == null ? void 0 : fn();
        });
      },
      stop: () => {
        intro == null ? void 0 : intro.abort();
        outro == null ? void 0 : outro.abort();
      }
    };
    var e = (
      /** @type {Effect} */
      active_effect
    );
    (e.transitions ?? (e.transitions = [])).push(transition2);
    if (should_intro) {
      var run = is_global;
      if (!run) {
        var block2 = (
          /** @type {Effect | null} */
          e.parent
        );
        while (block2 && (block2.f & EFFECT_TRANSPARENT) !== 0) {
          while (block2 = block2.parent) {
            if ((block2.f & BLOCK_EFFECT) !== 0) break;
          }
        }
        run = !block2 || (block2.f & EFFECT_RAN) !== 0;
      }
      if (run) {
        effect(() => {
          untrack(() => transition2.in());
        });
      }
    }
  }
  function animate(element, options, counterpart, t2, on_finish) {
    var is_intro = t2 === 1;
    if (is_function(options)) {
      var a;
      var aborted = false;
      queue_micro_task(() => {
        if (aborted) return;
        var o = options({ direction: is_intro ? "in" : "out" });
        a = animate(element, o, counterpart, t2, on_finish);
      });
      return {
        abort: () => {
          aborted = true;
          a == null ? void 0 : a.abort();
        },
        deactivate: () => a.deactivate(),
        reset: () => a.reset(),
        t: () => a.t()
      };
    }
    counterpart == null ? void 0 : counterpart.deactivate();
    if (!(options == null ? void 0 : options.duration)) {
      on_finish();
      return {
        abort: noop,
        deactivate: noop,
        reset: noop,
        t: () => t2
      };
    }
    const { delay = 0, css, tick, easing = linear } = options;
    var keyframes = [];
    if (is_intro && counterpart === void 0) {
      if (tick) {
        tick(0, 1);
      }
      if (css) {
        var styles = css_to_keyframe(css(0, 1));
        keyframes.push(styles, styles);
      }
    }
    var get_t = () => 1 - t2;
    var animation = element.animate(keyframes, { duration: delay });
    animation.onfinish = () => {
      var t1 = (counterpart == null ? void 0 : counterpart.t()) ?? 1 - t2;
      counterpart == null ? void 0 : counterpart.abort();
      var delta = t2 - t1;
      var duration = (
        /** @type {number} */
        options.duration * Math.abs(delta)
      );
      var keyframes2 = [];
      if (duration > 0) {
        var needs_overflow_hidden = false;
        if (css) {
          var n = Math.ceil(duration / (1e3 / 60));
          for (var i = 0; i <= n; i += 1) {
            var t = t1 + delta * easing(i / n);
            var styles2 = css_to_keyframe(css(t, 1 - t));
            keyframes2.push(styles2);
            needs_overflow_hidden || (needs_overflow_hidden = styles2.overflow === "hidden");
          }
        }
        if (needs_overflow_hidden) {
          element.style.overflow = "hidden";
        }
        get_t = () => {
          var time = (
            /** @type {number} */
            /** @type {globalThis.Animation} */
            animation.currentTime
          );
          return t1 + delta * easing(time / duration);
        };
        if (tick) {
          loop(() => {
            if (animation.playState !== "running") return false;
            var t3 = get_t();
            tick(t3, 1 - t3);
            return true;
          });
        }
      }
      animation = element.animate(keyframes2, { duration, fill: "forwards" });
      animation.onfinish = () => {
        get_t = () => t2;
        tick == null ? void 0 : tick(t2, 1 - t2);
        on_finish();
      };
    };
    return {
      abort: () => {
        if (animation) {
          animation.cancel();
          animation.effect = null;
          animation.onfinish = noop;
        }
      },
      deactivate: () => {
        on_finish = noop;
      },
      reset: () => {
        if (t2 === 0) {
          tick == null ? void 0 : tick(1, 0);
        }
      },
      t: () => get_t()
    };
  }
  function is_bound_this(bound_value, element_or_component) {
    return bound_value === element_or_component || (bound_value == null ? void 0 : bound_value[STATE_SYMBOL]) === element_or_component;
  }
  function bind_this(element_or_component = {}, update, get_value, get_parts) {
    effect(() => {
      var old_parts;
      var parts;
      render_effect(() => {
        old_parts = parts;
        parts = [];
        untrack(() => {
          if (element_or_component !== get_value(...parts)) {
            update(element_or_component, ...parts);
            if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
              update(null, ...old_parts);
            }
          }
        });
      });
      return () => {
        queue_micro_task(() => {
          if (parts && is_bound_this(get_value(...parts), element_or_component)) {
            update(null, ...parts);
          }
        });
      };
    });
    return element_or_component;
  }
  function parseStringToNumber(input) {
    let [semesterPart, sessionPart] = input.split(/ SESSION /i);
    if (!semesterPart || !sessionPart) {
      if (input === "SEMESTER II SESSON 2022/2023") {
        return 2022232;
      }
      throw new Error("Invalid input format. Expected 'SEMESTER ... SESSION ...'");
    }
    const semesterMatch = semesterPart.match(/^SEMESTER\s+(\S+)/i);
    if (!semesterMatch) {
      throw new Error("Invalid semester format");
    }
    const semesterStr = semesterMatch[1];
    let semesterNumber;
    if (/^[IVXLCDM]+$/i.test(semesterStr)) {
      semesterNumber = romanToInt(semesterStr.toUpperCase());
    } else if (/^\d+$/.test(semesterStr)) {
      semesterNumber = parseInt(semesterStr, 10);
    } else {
      throw new Error("Semester must be a Roman numeral or a digit");
    }
    if (semesterNumber < 0 || semesterNumber > 9) {
      throw new Error("Semester must be a single digit (0-9)");
    }
    const years = sessionPart.split("/");
    if (years.length !== 2 || years[0].length !== 4 || years[1].length !== 4) {
      throw new Error("Session must be two four-digit years separated by '/'");
    }
    const startYearStr = years[0];
    const endYearShort = years[1].slice(-2);
    const combinedStr = startYearStr + endYearShort + semesterNumber.toString();
    const combinedNumber = parseInt(combinedStr, 10);
    if (isNaN(combinedNumber)) {
      throw new Error("Failed to convert combined string to number");
    }
    return combinedNumber;
  }
  function romanToInt(roman) {
    const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1e3 };
    let total = 0;
    let prevValue = 0;
    for (let i = roman.length - 1; i >= 0; i--) {
      const current = romanMap[roman[i]];
      if (current >= prevValue) {
        total += current;
      } else {
        total -= current;
      }
      prevValue = current;
    }
    return total;
  }
  function removeDuplicates(arr, key1, key2) {
    const seen = /* @__PURE__ */ new Set();
    return arr.filter((obj) => {
      const key = `${obj[key1]}|${obj[key2]}`;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }
  const util = {
    parseStringToNumber,
    romanToInt,
    removeDuplicates
  };
  const PUBLIC_VERSION = "5";
  if (typeof window !== "undefined")
    (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);
  function cubic_out(t) {
    const f = t - 1;
    return f * f * f + 1;
  }
  function slide(node, { delay = 0, duration = 400, easing = cubic_out, axis = "y" } = {}) {
    const style = getComputedStyle(node);
    const opacity = +style.opacity;
    const primary_property = axis === "y" ? "height" : "width";
    const primary_property_value = parseFloat(style[primary_property]);
    const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
    const capitalized_secondary_properties = secondary_properties.map(
      (e) => (
        /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
        `${e[0].toUpperCase()}${e.slice(1)}`
      )
    );
    const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
    const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
    const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
    const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
    const border_width_start_value = parseFloat(
      style[`border${capitalized_secondary_properties[0]}Width`]
    );
    const border_width_end_value = parseFloat(
      style[`border${capitalized_secondary_properties[1]}Width`]
    );
    return {
      delay,
      duration,
      easing,
      css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;min-${primary_property}: 0`
    };
  }
  function handle_click(_, display_pdf) {
    set(display_pdf, !get(display_pdf));
  }
  var root_1$1 = /* @__PURE__ */ template(`<iframe class="svelte-1k6wdzs"></iframe>`);
  var root$1 = /* @__PURE__ */ template(`<button class="card svelte-1k6wdzs"><div class="filename svelte-1k6wdzs"> </div> <div class="semester svelte-1k6wdzs"> </div> <div class="faculty svelte-1k6wdzs"> </div> <!></button>`);
  function ExamPaperCard($$anchor, $$props) {
    push($$props, true);
    let display_pdf = state(false);
    let file_label = state(void 0);
    function onintroend() {
      if (typeof get(file_label) === "undefined") return;
      get(file_label).scrollIntoView({ behavior: "smooth", block: "start" });
    }
    var button = root$1();
    button.__click = [handle_click, display_pdf];
    var div = child(button);
    var text = child(div);
    bind_this(div, ($$value) => set(file_label, $$value), () => get(file_label));
    var div_1 = sibling(div, 2);
    var text_1 = child(div_1);
    var div_2 = sibling(div_1, 2);
    var text_2 = child(div_2);
    var node = sibling(div_2, 2);
    {
      var consequent = ($$anchor2) => {
        var iframe = root_1$1();
        template_effect(() => {
          set_attribute(iframe, "src", $$props.paper.pdf_link);
          set_attribute(iframe, "title", $$props.paper.exam_paper);
        });
        event("introend", iframe, onintroend);
        transition(3, iframe, () => slide);
        append($$anchor2, iframe);
      };
      if_block(node, ($$render) => {
        if (get(display_pdf)) $$render(consequent);
      });
    }
    template_effect(() => {
      set_text(text, $$props.paper.exam_paper);
      set_text(text_1, $$props.paper.semester);
      set_text(text_2, $$props.paper.faculty);
    });
    append($$anchor, button);
    pop();
  }
  delegate(["click"]);
  var root_1 = /* @__PURE__ */ template(`<meta name="viewport" content="width=device-width, initial-scale=1.0" class="svelte-1mvkby8">`);
  var root = /* @__PURE__ */ template(`<div class="svelte-1mvkby8"></div>`);
  function Main($$anchor, $$props) {
    var div = root();
    head(($$anchor2) => {
      var meta = root_1();
      append($$anchor2, meta);
    });
    each(div, 21, () => $$props.papers, index, ($$anchor2, paper) => {
      ExamPaperCard($$anchor2, {
        get paper() {
          return get(paper);
        }
      });
    });
    append($$anchor, div);
  }
  const exam_paper_table_selector = "body > table:nth-child(5)";
  const exam_paper_table = document.querySelector(exam_paper_table_selector);
  if (exam_paper_table === null) {
    throw new Error(`Could not find exam paper table with selector: ${exam_paper_table_selector}`);
  }
  const table_body = exam_paper_table.querySelector("tbody");
  const raw_papers = [];
  for (let i = 1; i < table_body.rows.length; i++) {
    const row = table_body.rows[i];
    const paper = {
      no: row.cells[0].textContent,
      exam_paper: row.cells[1].textContent,
      semester: row.cells[2].textContent,
      faculty: row.cells[3].textContent,
      pdf_link: row.cells[4].querySelector("a").href
    };
    paper.semester_numbered = util.parseStringToNumber(paper.semester);
    raw_papers.push(paper);
  }
  raw_papers.sort((a, b) => {
    return b.semester_numbered - a.semester_numbered;
  });
  const papers = util.removeDuplicates(raw_papers, "exam_paper", "semester_numbered");
  console.log(papers);
  const main_container = document.createElement("div");
  main_container.id = "main_container";
  document.body.insertBefore(main_container, exam_paper_table);
  exam_paper_table.remove();
  mount(Main, {
    target: main_container,
    props: {
      papers
    }
  });
})();
