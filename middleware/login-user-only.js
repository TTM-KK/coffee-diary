export default function ({ route, redirect, store }) {
    if (store.state.user) {
    } else {
        return redirect('/')
    }
}