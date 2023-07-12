import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { authorized, isModalOpen } from "../stores";

const BlogContent = ({
  children,
  title,
  date,
}: {
  children: any;
  title: string;
  date: string;
}) => {
  const $isModalOpen = useStore(isModalOpen);
  const $authorized = useStore(authorized);
  const [isAuthorized, setIsAuthorized] = useState($authorized);

  useEffect(() => {
    isAuthorized === "false" ? isModalOpen.set(!$isModalOpen) : null;
  }, []);

  useEffect(() => {
    setIsAuthorized($authorized);
  }, [$authorized]);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="font-medium">{date}</p>
      </div>
      <div className="text-lg relative box-static">
        {isAuthorized === "true" ? null : (
          <div className="absolute inset-0 glass rounded-lg"></div>
        )}
        {isAuthorized === "true" ? (
          children
        ) : (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce augue
            ipsum, posuere at quam eu, elementum varius libero. Etiam ac quam
            mauris. Sed consequat mattis condimentum. Aenean bibendum tortor
            nibh, id lobortis sem molestie ut. In et sollicitudin mauris. In
            <br />
            <br />
            magna ante, tristique vel porttitor non, pellentesque in lacus.
            Suspendisse et arcu at nisl pellentesque pretium. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Mauris rhoncus nisl nec lacus sodales, eu vestibulum justo
            porta. Etiam laoreet ligula vel ipsum viverra venenatis vitae non
            enim. Donec quis volutpat felis. Donec vel ex diam. Ut fermentum
            <br />
            <br />
            volutpat feugiat. Aliquam tristique malesuada tristique. Duis ut
            efficitur nisl, quis viverra erat. Duis vitae ullamcorper elit.
            Integer auctor neque quis lorem mollis, bibendum volutpat elit
            lobortis. Proin sit amet ultricies eros, nec gravida metus. Mauris
            ultricies libero vitae ligula ullamcorper, a vestibulum enim
            consequat. Suspendisse potenti. Nullam eget justo nibh. Morbi eu
            volutpat tortor. Donec at fringilla dui, vitae vehicula neque. Etiam
            lorem eros, sollicitudin a diam et, tincidunt ullamcorper massa.
            Mauris orci est, vulputate sit amet enim et, commodo accumsan nulla.
            Praesent aliquam vel felis in efficitur. Maecenas feugiat felis in
            est commodo, non aliquet eros placerat. In tincidunt ex vitae
            pretium aliquam. In non nisl nec risus placerat eleifend sed eget
            justo. Nam magna mauris, posuere ut enim eget, consectetur iaculis
            turpis. Aenean pretium tellus at diam convallis posuere sit amet
            vitae diam. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Phasellus tincidunt justo vulputate, hendrerit orci in,
            imperdiet libero. Mauris at justo lacinia, venenatis dolor et,
            tempus urna. Vestibulum ullamcorper, nulla ut faucibus pellentesque,
            <br />
            <br />
            orci erat pretium enim, in lobortis lectus velit ac lacus. Fusce
            consequat massa est, cursus sollicitudin felis pellentesque a. Cras
            malesuada ultrices ante. Vestibulum dapibus et ante et vehicula.
            Aliquam pulvinar pretium dolor non rutrum. Nunc ullamcorper sodales
            risus, varius tincidunt odio ultricies ac. Etiam dictum condimentum
            nisl a iaculis. Curabitur non diam sed mi fringilla fermentum ac eu
            mauris. Mauris et scelerisque lorem, id consequat velit. Nam non
            mauris a augue placerat tincidunt a vel odio. Vivamus gravida, quam
            in aliquam dignissim, nunc tellus laoreet leo, id feugiat ipsum
            lorem eu velit. Etiam sed nunc posuere, tristique libero quis,
            consequat velit. Vestibulum vehicula porta lectus. Sed placerat elit
            ac facilisis hendrerit. Integer porta rutrum faucibus. Donec vitae
            metus sed quam venenatis bibendum id in diam. Fusce sed venenatis
            ex. Proin sed rhoncus nisl. In hac habitasse platea dictumst. Mauris
            <br />
            <br />
            dictum massa sed nunc dictum, non tempus ligula faucibus. Aenean
            congue nunc mauris, vel pharetra quam tincidunt eget. Aenean ac
            tincidunt odio, vel eleifend leo. Curabitur consequat facilisis
            semper. Phasellus iaculis interdum odio id vestibulum. Fusce feugiat
            pellentesque orci, ac ornare tellus. Quisque vitae suscipit lorem.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogContent;
