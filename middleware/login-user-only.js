export default function ({ route, redirect, store }) {
    // 例によっては判定を二重否定でしてたりするので、問題が起きないか要確認必要。
    if (store.state.user) {
    } else {
        return redirect('/')
    }
}