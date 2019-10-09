import api from "@/utils/demo-api";

import {
  sendSuccessNotice,
  sendErrorNotice,
  closeNotice,
  getDefaultPagination,
  commitPagination,
} from "@/utils/store-util.js";

import { get } from "lodash";

const state = {
  pagination: {},
  loading: false,
  mode: "",
  snackbar: false,
  notice: "",
  headers: [{ text: 'Name',
              align: 'left',
              value: 'name'},
            { text: 'T2', value: 'val1' },
            { text: 'T9', value: 'val2' },
            { text: 'T6', value: 'val3' }],
  items: [
    {
        name: "Gross Potential Rent (GPR)",
        val1: -27887,
        val2: -30447,
        val3: -32964,
        isTotal: false },
    {
      name: "Less Vacancy Loss",
      val1: -97156,
      val2: -73531,
      val3: -89770,
      isTotal: false
    },
    {
      name: "Less Bad Debt",
      val1: -40569,
      val2: -50379,
      val3: -64320,
      isTotal: false
    },
    {
      name: "Less Concessions",
      val1: -61595,
      val2: -59964,
      val3: -71150,
      isTotal: false
    },
    {
      name: "Net Rentable Income",
      val1: -227207,
      val2: -214321,
      val3: -258204,
      isTotal: true
    },
    {
      name: "Laundry/Vending Income (Net)",
      val1: 0,
      val2: 0,
      val3: 0,
      isTotal: false
    },
    {
      name: "Parking Income (Net)",
      val1: 0,
      val2: 0,
      val3: 0,
      isTotal: false
    },
    {
      name: "Commercial Income (Net)",
        val1: 0,
        val2: 0,
        val3: 0,
      isTotal: false
    },
    {
      name: "RUBS (income line item)",
      val1: 71476,
      val2: 71509,
      val3: 64466,
      isTotal: false
    },
    {
      name: "RUBS (expense line item)",
        val1: 0,
        val2: 0,
        val3: 0,
      isTotal: false
    },
    {
      name: "Other Income (Allowable)",
      val1: 70599,
      val2: 74488,
      val3: 65118,
      isTotal: false
    },
    {
      name: "App Fee",
      val1: 5440,
      val2: 4693,
      val3: 3320,
      isTotal: false
    },
    {
      name: "Forfeit Deposits",
      val1: 10600,
      val2: 7771,
      val3: 7946,
      isTotal: false
    },
    {
      name: "Late/Early Term Fees",
      val1: 39292,
      val2: 37328,
      val3: 35122,
      isTotal: false
    },
    {
      name: "Pet Deposits",
      val1: 8371,
      val2: 7407,
      val3: 6830,
      isTotal: false
    },
    {
      name: "Premiums",
      val1: 7134,
      val2: 7881,
      val3: 8074,
      isTotal: false
    },
    {
      name: "Corporate Prem.",
        val1: 0,
        val2: 0,
        val3: 0,
      isTotal: false
    },
    {
      name: "Medicare/Medicaid",
      val1: 0,
      val2: 0,
      val3: 0,
      isTotal: false
    },
    {
      name: "Nursing/Medical Income",
      val1: 0,
        val2: 0,
        val3: 0,
      isTotal: false
    },
    {
      name: "Meals Income",
        val1: 0,
        val2: 0,
        val3: 0,
      isTotal: false
    },
    {
      name: "Second Res. Income",
      val1: 0,
        val2: 0,
        val3: 0,
      isTotal: false
    },
    {
      name: "Unallowable",
      val1: 1122,
      val2: 1421,
      val3: 2010,
      isTotal: false
    },
    {
      name: "EGI",
      val1: -13173,
      val2: -1823,
      val3: -65318,
      isTotal: true
    }],
  basicInfo: {
    name: "West Loop Luxury",
    street: "320 N Canal St",
    city: "Chicago",
    state: "IL",
    zip: 60616,
    image: "https://ssl.cdn-redfin.com/system_files/media/303940_JPG/genLdpUgcMediaBrowserUrl/item_2.jpg",
    yearBuild: "",
    numberUnits: "",
    propetyType: "",
    avm: 7403292,
    year: 2002,
    type: "House"
  },
  propertise: []
};


const getters = {
};

const actions = {
  getPropertise ({ commit }) {
    api.getData("propertise/").then(res => {
       if (res.data){
         const propertise = res.data;
         commit("setPropertise", propertise);
       }
    });
  },

  closeSnackBar ({ commit }, timeout ) {
     closeNotice(commit, timeout);
  }
};

const mutations = {
  setPropertise(state, propertise) {
    state.propertise = propertise;
  },
  setProperty(state, property) {
    state.property = property;
  },
  setLoading (state, { loading }) {
    state.loading = loading;
  },
  setNotice (state, { notice }) {
    console.log(" notice .... ", notice);
    state.notice = notice;
  },
  setSnackbar (state, { snackbar }) {
    state.snackbar = snackbar;
  },
  setMode (state, { mode }) {
    state.mode = mode;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
