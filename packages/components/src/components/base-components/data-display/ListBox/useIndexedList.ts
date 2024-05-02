//utility function to add index to all items in list

export const useIndexedList = (list: any[]) =>
  list.map((item, index) => ({
    ...item,
    index: index,
  }));
