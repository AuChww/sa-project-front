import { defineStore } from 'pinia'
export const useAuthStore = defineStore('auth', {
  state: () => {
    return { 
      token: "",
      user: { name: "", email: "" , role: "", username: "", address: "", id:"", bank:"", bank_number:"",phone:"",}
    }
  },
  getters: {
    isLogin: (state) => state.token !== "",
    checkRole: (state) => (roleToCheck) => {
      return state.user.role === roleToCheck;
    },
    userRole: (state) => state.user.role,
  },
  actions: {
    setNewToken(token: string) {
      this.token = token
    },
    setUser(name: string, email: string, role: string, username: string, address: string, id:string, bank:string, bank_number:string,phone:string) {
      this.user.name = name
      this.user.email = email
      this.user.role = role
      this.user.username = username
      this.user.address = address
      this.user.id = id
      this.user.bank = bank
      this.user.bank_number = bank_number
      this.user.phone = phone
    },
    clear() {
      this.token = ''
      this.user.name = ''
      this.user.email = ''
      this.user.role = ''
      this.user.username = ''
      this.user.address = ''
      this.user.phone =''
      this.user.id = ''
      this.user.bank = ''
      this.user.bank_number = ''
    },
    updateUser(name: string, email: string, username: string, address: string, bank: string, bank_number: string,phone: string) {
          this.user.name = name
          this.user.email = email
          this.user.username = username
          this.user.address = address
          this.user.phone = phone
          this.user.bank = bank
          this.user.bank_number = bank_number
    },
  },
  persist: true
})