import { defineStore } from 'pinia'
export const useAuthStore = defineStore('auth', {
  state: () => {
    return { 
      token: "",
      user: { name: "", email: "" , role: "", username: "", address: "", id:""}
    }
  },
  getters: {
    isLogin: (state) => state.token !== "",
    checkRole: (state) => (roleToCheck) => {
      return state.user.role === roleToCheck;
    },
  },
  actions: {
    setNewToken(token: string) {
      this.token = token
    },
    setUser(name: string, email: string, role: string, username: string, address: string, id:string) {
      this.user.name = name
      this.user.email = email
      this.user.role = role
      this.user.username = username
      this.user.address = address
      this.user.id = id
    },
    clear() {
      this.token = ''
      this.user.name = ''
      this.user.email = ''
      this.user.role = ''
      this.user.username = ''
      this.user.address = ''
      this.user.id = ''
    },
  },
  persist: true
})