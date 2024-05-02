// This is for internal use by SearchProvider's useReducer call.
const reducer = (state, action) => {
  switch(action.type) {
    case 'initFilter': {
      const { id, value } = action;
      const newState = {...state};
      const { initFilters, filters } = newState;
      if (!initFilters.has(id)) {
        newState.initFilters = initFilters.set(id, value);
      }
      if (!filters.has(id)) {
        newState.filters = filters.set(id, value);
      }
      return newState;
    }
    case 'setFilters': {
      const newState = { ...state };
      if (action.filters) {
        newState.filters = action.filters;
      }
      if (action.initFilters) {
        newState.initFilters = action.initFilters;
      }
      return newState;
    }
    case 'removeFilter': {
      const { id } = action;
      const newState = {...state};
      if (newState.filters.has(id)) {
        newState.filters.delete(id);
      }
      if (newState.initFilters.has(id)) {
        newState.initFilters.delete(id);
      }
      return newState;
    }
    case 'setFilterValue': {
      const { filters } = state;
      const { id, value } = action;
      const newState = {...state};
      newState.filters = filters.set(id, value);
      return newState;
    }
    case 'resetFilter': {
      const { initFilters } = state;
      const { id } = action;
      const newState = { ...state };
      if (initFilters.has(id)) {
        const initValue = initFilters.get(id);
        newState.filters = newState.filters.set(id, initValue);
      }
      return newState;
    }
    case 'resetFilters': {
      const { initFilters, filters } = state;
      const newState = { ...state };
      filters.forEach((value, key) => {
        if (initFilters.has(key)) {
          const initValue = initFilters.get(key);
          newState.filters = newState.filters.set(key, initValue);
        }
      });
      return newState;
    }
    case 'addRule': {
      const { rules } = state;
      const { id, ruleFunction } = action;
      const newState = {...state};
      if (!rules.has(id)) {
        newState.rules = rules.set(id, ruleFunction);
      }
      return newState;
    }
    case 'removeRule': {
      const { id } = action;
      const newState = {...state};
      if (newState.rules.has(id)) {
        newState.rules.delete(id);
      }
      return newState;
    }
    case 'setSortBy': {
      const { sortBy } = action;
      const newState = {...state};
      newState.sortBy = sortBy;
      newState.totalItems = 0;
      newState.pending = true;
      return newState;
    }
    case 'setSearchKeywords': {
      const { keywords } = action;
      const newState = {...state};
      newState.keywords = keywords;
      newState.totalItems = 0;
      newState.pending = true;
      return newState;
    }
    case 'setTab': {
      const { tab } = action;
      const newState = {...state};
      newState.tab = tab;
      newState.totalItems = 0;
      newState.pending = true;
      return newState;
    }
    case 'setResults': {
      const { results } = action;
      // eslint-disable-next-line camelcase
      const { total_count = 0, content = [], message = '' } = results ?? {};
      const newState = {...state};
      // Limit the number of pages to at most 10.
      // eslint-disable-next-line camelcase
      newState.totalItems = Number(total_count) > 0 ? Math.min(total_count, 100) : total_count;
      newState.results = content;
      newState.pending = false;
      newState.resultsMessage = !message ? '' : message;
      return newState;
    }
    case 'setPending': {
      const { pending } = action;
      const newState = {...state};
      newState.pending = pending;
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
