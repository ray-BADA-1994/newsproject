/* eslint-disable react/prop-types */
import { useEffect } from "react";
import WebFont from "webfontloader";
import jsonData from "../data/data.json";
import { useQuery } from "@tanstack/react-query";

import {
  useLocation,
  useLoaderData,
  useSearchParams,
  useParams,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { CommentContainer } from "./comment-section/CommentContainer";
import { AuthContextProvider } from "./comment-section/context/AuthContext";

export const NewsDetails = () => {
  // const newDetailsData = useLoaderData()
  const { newstitle, urlpath } = useParams();

  const {
    data: articleData,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: [`${urlpath}`],
    queryFn: () =>
      fetch(`https://mockjsonapi.onrender.com/${urlpath}`).then((res) =>
        res.json()
      ),
  });

  // const {
  //   isLoading: loadingPostComments,
  //   error: errorPostComments,
  //   data: commentsData,
  // } = useQuery(
  //   ['comments', 'post', newstitle],
  //   () =>
  //     axios
  //       .get('https://jsonplaceholder.typicode.com/posts/1/comments')
  //       .then((res) => res.data),
  //   {
  //     enabled: articleData && articleData.length > 0,
  //   }
  // );

  // console.log(newstitle);

  let location = useLocation();
  let { pathname } = useLocation();
  // console.log(pathname);
  let state = location.state;
  // console.log(state);
  // const data = useLoaderData()

  useEffect(() => {
    window.scrollTo(0, 0);
    WebFont.load({
      google: {
        families: [
          "Lora",
          "Slabo 27px",
          "PT Serif",
          "Noto Serif",
          "Montserrat",
        ],
      },
    });
  }, [pathname]);

  if (isLoading || articleData.length == 0) {
    return (
      <div className="fixed top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.9)] flex justify-center items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  let filteredSingleNews = articleData[0].data.find(
    (element) =>
      element.title.trim().replaceAll(" ", "-").toLowerCase() == newstitle
  );

  // console.log(data);

  // console.log(filteredSingleNews);

  return (
    <div className="min-h-[100vh] h-fit lg:pt-5 ">
      <div className="md:h-[100vh] pt-4 md:pt-0 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4">
        <div className="flex flex-col h-fit md:h-full justify-center items-start">
          <h1 className="text-4xl md:text-5xl font-bold">
            {filteredSingleNews.title}
          </h1>
          <p className="font-medium mt-2 uppercase text-xsm italic text-slate-600">
            Written by: {filteredSingleNews.author}
          </p>
          <p className="font-medium mt-1 uppercase text-[12px] italic text-slate-600">
            Published: {filteredSingleNews.published_at}
          </p>
        </div>

        <div className="h-[400px] md:h-full ">
          <img
            src={filteredSingleNews.image}
            alt={filteredSingleNews.title}
            className="h-full md:w-[80%] object-cover"
          />
        </div>
      </div>
      <p
        className="font-medium text-lg md:text-2xl md:tracking-wide leading-10 mt-10 md:w-[75%] mx-auto text-justifyt"
        style={{ fontFamily: "Noto Serif" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
        inventore, maiores voluptate accusantium voluptas fugiat reiciendis
        consectetur suscipit! Architecto odit doloremque amet consectetur
        facilis cumque nihil nostrum nobis possimus reiciendis ipsum, veniam
        enim officia quibusdam harum voluptate vero animi numquam? Totam sunt
        quidem veritatis maiores amet quo! Voluptatibus earum possimus sunt
        dolores cupiditate fuga. Magnam alias nam adipisci repellendus,
        perferendis a ipsa enim consequatur corporis natus dolorem inventore
        beatae pariatur id omnis totam aperiam iusto veniam obcaecati labore
        similique. Qui consectetur alias error? Expedita voluptatibus id
        pariatur tempora consequuntur. Sequi perspiciatis, reprehenderit esse
        doloribus hic et, ex aspernatur atque commodi consequatur illum eveniet
        voluptatem dolorum dignissimos autem iste, velit neque blanditiis.
        Commodi consequatur velit expedita, vel odit maiores necessitatibus
        ratione facere deserunt delectus libero incidunt saepe dignissimos.
        Natus eos non, molestiae corporis sapiente assumenda blanditiis quod
        explicabo totam veniam facilis necessitatibus consequatur consequuntur
        repudiandae magnam ab, quae earum sunt sint officia. Soluta sapiente
        possimus iusto natus hic numquam veniam voluptatum, dignissimos, libero
        laborum modi sed cupiditate, earum omnis vel nostrum animi provident!
        Quis amet assumenda et nesciunt laborum nisi maxime dolorum, accusamus
        id officia dicta tenetur beatae consequatur ab praesentium aliquid
        perferendis, cum exercitationem delectus? Saepe, explicabo odit sunt
        recusandae veniam cupiditate optio inventore enim obcaecati numquam
        ipsum tempora odio cumque iusto quisquam dolores blanditiis maxime iste
        dicta consectetur ut amet laborum. Velit, suscipit soluta. Laborum qui,
        accusamus non eveniet soluta doloremque quae error optio voluptatem.
        Alias nesciunt ut fugiat error quod, animi aliquam totam delectus
        exercitationem provident sint veritatis rerum rem facere voluptates?
        Ducimus, ad. Quibusdam dignissimos nostrum ut sint? Aperiam illum nisi
        suscipit. Quod sit voluptatum deleniti asperiores illo rem quibusdam
        odit fugiat tenetur culpa architecto inventore error maxime eligendi,
        quos pariatur voluptatibus. Placeat provident magni molestiae amet, quae
        laborum vero praesentium velit in veritatis illum temporibus quasi
        molestias dolorem iure tenetur rem consequuntur sequi odit officiis
        tempora nobis voluptas? Earum cumque nam suscipit assumenda repudiandae
        illum ea in saepe eligendi doloremque sit architecto mollitia sequi
        explicabo ab ipsum perspiciatis laboriosam, placeat reiciendis. Aut in
        itaque harum non ipsa ad nemo ipsum, quaerat repellendus iste alias
        incidunt. Dignissimos eveniet id aliquam quasi hic animi, nam maxime
        error laudantium minima perspiciatis itaque. Voluptatibus explicabo
        eveniet, sint perferendis veniam, molestiae accusantium rem saepe
        tempore aspernatur culpa est pariatur deserunt. Ducimus quidem illum
        numquam rerum ut corporis illo architecto laboriosam minima perspiciatis
        est magni doloribus blanditiis adipisci maiores totam iusto, sapiente
        neque ab optio esse tenetur voluptate! Tempora, non ex, possimus atque
        velit, odit recusandae omnis quia quisquam totam reiciendis iste
        explicabo et excepturi esse id cumque culpa officiis. Maxime itaque
        sequi repellendus libero, corporis, aspernatur unde doloribus laborum
        voluptas quaerat mollitia alias, at est esse quod debitis dignissimos
        magnam. Dolorem quo impedit sit pariatur illum odit dicta officia hic
        explicabo dolor itaque, fuga quia recusandae ipsum aliquam sed beatae
        reprehenderit, quae dolorum, cumque sequi quas. In perspiciatis magni
        laborum! Eius cumque minus rerum libero facere porro delectus! Adipisci
        assumenda eaque voluptatum, ab delectus tempore eveniet repudiandae
        culpa. Quibusdam ut magni dolor iure perspiciatis eveniet itaque
        eligendi ex voluptate veniam, voluptas repellat eum consectetur
        laboriosam necessitatibus adipisci minima hic illo, dignissimos est
        consequuntur omnis, unde quisquam eius? Rem inventore voluptatum libero
        cupiditate est consequuntur quasi, excepturi ut iure earum optio
        dignissimos, neque hic aperiam ad voluptas necessitatibus suscipit.
        Alias ab veritatis maiores obcaecati, soluta unde. Maiores facere
        exercitationem quasi. Nostrum, quo ipsa aspernatur eum voluptates
        tempora. Architecto quas enim ipsum iste natus ducimus quibusdam optio
        placeat, quod nihil, magni dolorum dolores? Ea debitis commodi, rerum
        alias, aspernatur tempora, dolore cupiditate architecto ut tenetur
        laborum reiciendis. Praesentium, consequatur est similique deleniti eos
        porro hic accusamus dicta nam quos laboriosam. Accusamus quos eos
        repudiandae velit a iusto quo neque? Ut hic quam quas quos optio et
        nihil impedit esse nesciunt nemo necessitatibus possimus, alias neque
        doloribus. Voluptatum, debitis eligendi. Molestias rerum quibusdam esse
        officiis error eligendi facilis. Sint voluptatem ea et porro magnam
        ullam provident labore aliquid! Adipisci quam delectus ratione incidunt
        ut optio id totam ab dolor dolorum, cumque a. Totam, adipisci iste nisi
        cupiditate magnam inventore debitis iure iusto natus libero itaque
        minus? Magnam, consectetur molestias in officiis similique fuga.
        Temporibus maxime enim ea nostrum vitae. Incidunt, assumenda. Voluptatum
        vitae, aperiam, minima quae ut esse facere enim illo officiis cum eius
        impedit odio iusto dolore ratione distinctio sint. Ad possimus adipisci
        autem vero laborum temporibus repellat deleniti minima commodi
        perferendis rem consequatur perspiciatis odit vel accusantium
      </p>
      {/* COMMENT SECTION START */}
      <AuthContextProvider>
        <CommentContainer newstitle={newstitle} />
      </AuthContextProvider>
      {/* COMMENT SECTION ENDS */}
      <div className="mt-10">
        <Home />
      </div>
    </div>
  );
};

// export const NewsDetailsLoader = async ({param})=> {
//   //  let {section} = param

//    const loadData = () => JSON.parse(JSON.stringify(jsonData));
//    const data = loadData()

//     return data.data
// }
