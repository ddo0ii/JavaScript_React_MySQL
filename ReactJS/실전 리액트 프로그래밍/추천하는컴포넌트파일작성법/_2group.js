// 컴포넌트에서 서로 연관된 코드라면 한곳으로 모아서 관리하는 것이 좋음
// useState끼리, useEffect 끼리~ 보다는, 서로 연관된것끼리 하면 좋음

// 그리고 아래의 것들이 너무 길어진다싶으면, 훅으로 만들어서 불러오기도 좋다. 아래 처럼!
// const user = useUser(userId);
// const width = useWindowWidth();

function Profile({ userId }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserApi(userId).then((data) => setUser(data));
  }, [userId]);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  // ...
}
