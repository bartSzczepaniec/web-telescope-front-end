import { Link } from "react-router-dom";
import SectionImagePlaceholder from "../assets/content/galaktyka.jpg"
import StandardHeader from "../components/StandardHeader";

function Subject() {
    return (
      <div className="Subject">
        <StandardHeader />
        <div className="wide-content-container">
            <Link to="/menu-ucz-sie">Wróć do wyboru rozdziałów i tematów › Dział 1</Link>
            <div className="wide-content">
                <h3 className="content-header">Temat 1</h3>
                <div className="content-top-image-container">
                    <img src={SectionImagePlaceholder} alt={'Temat 1'}/>
                </div>
                <div className="main-content subject">
                    <p><h5>Naglowek akapitu</h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id congue orci. Nunc imperdiet nisl eu justo lacinia aliquet. Donec eget justo ac sem lobortis finibus. Sed vel luctus est. Nam eleifend mi sapien, ac vestibulum metus convallis vitae. Curabitur non erat quis nisl tempus consectetur. Fusce suscipit ac mauris id tempor. Aenean sagittis ex ac quam dapibus, vitae aliquam ligula facilisis. Nunc sit amet mauris felis. Sed non mauris tristique, ultricies enim ac, tempor urna. Sed a lacus et ipsum blandit tempor ut ac nunc. Nulla consequat rhoncus metus, non ullamcorper lorem egestas a.
                    </p>
                    <p><h5>Naglowek akapitu</h5>
                    Maecenas id felis enim. Sed id congue est, porta consectetur orci. Morbi sagittis quam quis sem accumsan pharetra. Donec tincidunt, arcu sit amet consectetur tincidunt, ligula mauris lacinia tellus, nec rhoncus urna lacus ultricies risus. Mauris interdum ornare lacus, vel dignissim enim imperdiet et. In in mattis urna. Pellentesque sollicitudin, massa vitae convallis viverra, erat erat dictum neque, id convallis magna libero eget nibh. Sed aliquet, dolor ut fermentum vulputate, sem magna accumsan nunc, sed scelerisque justo ante quis elit. Integer at bibendum urna. Etiam quam arcu, efficitur lobortis euismod non, elementum non justo.
                    <img src={SectionImagePlaceholder} alt={'Temat 1'}/>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id congue orci. Nunc imperdiet nisl eu justo lacinia aliquet. Donec eget justo ac sem lobortis finibus. Sed vel luctus est. Nam eleifend mi sapien, ac vestibulum metus convallis vitae. Curabitur non erat quis nisl tempus consectetur. Fusce suscipit ac mauris id tempor. Aenean sagittis ex ac quam dapibus, vitae aliquam ligula facilisis. Nunc sit amet mauris felis. Sed non mauris tristique, ultricies enim ac, tempor urna. Sed a lacus et ipsum blandit tempor ut ac nunc. Nulla consequat rhoncus metus, non ullamcorper lorem egestas a.
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Subject;