import { createSlice } from "@reduxjs/toolkit";

export const workOrder = createSlice({
  name: "counter",
  initialState: {
    allExpanded: false,
    allSelected: false,
    value: [
      {
        id: "7",
        packageName: "Civil 1",
        rate: "567.80",
        total: "2967843",
        selected: false,
        expanded: false,
        subPackages: [
          {
            id: "8",
            packageName: "Activity 1",
            rate: "567.80",
            total: "2967843",
            selected: false,
            expanded: false,
            subPackages: [
              {
                id: "9",
                packageName: "Work Item 1",
                rate: "567.80",
                total: "2967843",
                selected: false,
                expanded: false,
                subPackages: [
                  {
                    id: "13",
                    packageName: "Civil 1",
                    rate: "567.80",
                    total: "2967843",
                    selected: false,
                    expanded: false,
                    subPackages: [
                      {
                        id: "14",
                        packageName: "Activity 1",
                        rate: "567.80",
                        total: "2967843",
                        selected: false,
                        expanded: false,
                        subPackages: [
                          {
                            id: "15",
                            packageName: "Work Item 1",
                            rate: "567.80",
                            total: "2967843",
                            selected: false,
                            expanded: false,
                            subPackages: [],
                          },
                          {
                            id: "16",
                            packageName: "Work Item 2",
                            rate: "567.80",
                            total: "2967843",
                            selected: false,
                            expanded: false,
                            subPackages: [],
                          },
                        ],
                      },
                      {
                        id: "5",
                        packageName: "Activity 2",
                        rate: "567.80",
                        total: "2967843",
                        selected: false,
                        expanded: false,
                        subPackages: [
                          {
                            id: "6",
                            packageName: "Work Item 1",
                            rate: "567.80",
                            total: "2967843",
                            selected: false,
                            expanded: false,
                            subPackages: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: "10",
                packageName: "Work Item 2",
                rate: "567.80",
                total: "2967843",
                selected: false,
                expanded: false,
                subPackages: [],
              },
            ],
          },
          {
            id: "11",
            packageName: "Activity 2",
            rate: "567.80",
            total: "2967843",
            selected: false,
            expanded: false,
            subPackages: [
              {
                id: "12",
                packageName: "Work Item 1",
                rate: "567.80",
                total: "2967843",
                selected: false,
                expanded: false,
                subPackages: [],
              },
            ],
          },
        ],
      },
      {
        id: "1",
        packageName: "Civil 1",
        rate: "567.80",
        total: "2967843",
        selected: false,
        expanded: false,
        subPackages: [
          {
            id: "2",
            packageName: "Activity 1",
            rate: "567.80",
            total: "2967843",
            selected: false,
            expanded: false,
            subPackages: [
              {
                id: "3",
                packageName: "Work Item 1",
                rate: "567.80",
                total: "2967843",
                selected: false,
                expanded: false,
                subPackages: [],
              },
              {
                id: "4",
                packageName: "Work Item 2",
                rate: "567.80",
                total: "2967843",
                selected: false,
                expanded: false,
                subPackages: [],
              },
            ],
          },
          {
            id: "5",
            packageName: "Activity 2",
            rate: "567.80",
            total: "2967843",
            selected: false,
            expanded: false,
            subPackages: [
              {
                id: "6",
                packageName: "Work Item 1",
                rate: "567.80",
                total: "2967843",
                selected: false,
                expanded: false,
                subPackages: [],
              },
            ],
          },
        ],
      },
    ],
  },
  reducers: {
    updateData: (state, action) => {
      state.value = action.payload.data;
    },
    updateAllSelectedValue: (state, action) => {
      state.allSelected = action.payload.value;
    },
    expandRow: (state, action) => {
        const id = action.payload.id;
    
        // Helper function to toggle the expanded state and handle children
        const toggleExpanded = (packageItem) => {
            if (packageItem.id === id) {
                // Toggle the current row's expanded state
                packageItem.expanded = !packageItem.expanded;
    
                // If collapsing, recursively collapse all children
                if (!packageItem.expanded) {
                    const collapseChildren = (subPackages) => {
                        subPackages.forEach((subPackage) => {
                            subPackage.expanded = false;  // collapse child
                            if (subPackage.subPackages.length > 0) {
                                collapseChildren(subPackage.subPackages);
                            }
                        });
                    };
                    collapseChildren(packageItem.subPackages);
                }
            } else {
                // Continue searching in the children if not found at the current level
                packageItem.subPackages.forEach(subPackage => toggleExpanded(subPackage));
            }
        };
    
        // Iterate through the main state packages
        state.value.forEach(packageItem => toggleExpanded(packageItem));
    },   
    expandAll: (state, action) => {
        const val = action.payload.value;

        const expand = (obj, selected) => {
            return {
              ...obj,
              expanded: val,
              subPackages: obj.subPackages.map((subPkg) =>
                expand(subPkg, selected)
              ),
            };
          };
    
          state.allExpanded = val;
    
          const tempArr = [...state.value];
    
          const newArr = [];
    
          for (let i = 0; i < tempArr.length; i++) {
            const obj = expand(tempArr[i], val);
            newArr.push(obj);
          }
    
          state.value = [...newArr];
    },
    updateAllSelected: (state, action) => {
      const selectData = (obj, selected) => {
        return {
          ...obj,
          selected,
          subPackages: obj.subPackages.map((subPkg) =>
            selectData(subPkg, selected)
          ),
        };
      };

      state.allSelected = action.payload.value;

      const tempArr = [...state.value];

      const newArr = [];

      for (let i = 0; i < tempArr.length; i++) {
        const obj = selectData(tempArr[i], action.payload.value);
        newArr.push(obj);
      }

      state.value = [...newArr];
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateData, updateAllSelected, updateAllSelectedValue , expandRow, expandAll} =
  workOrder.actions;

export default workOrder.reducer;
