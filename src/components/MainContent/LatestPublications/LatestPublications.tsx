import styled from 'styled-components';
import Ic from '../../icons/I';

const PhotoLeft = styled.div`
    width: 400px;
    height: 400px;
    background-image: radial-gradient(lightgrey, #dfdfdf, grey);
    box-shadow: 0 0 5px 1px #dfdfdf;
    div{
        height: 300px;
    }
`;
const PhotoLeftDesc = styled.div`
    width: 100%;
   // box-shadow: 0 0 5px 1px #745d5d;
    text-align: left;
    margin: 6px;
`;
const ContentRight = styled.div`
    width: calc(100% - 400px);
    background-color:white;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    box-shadow: 0 0 5px 1px #dfdfdf;
`;

const PublicationBox = styled.div`
    width: 90%;
    height: 100px;
    box-shadow: 0 0 5px 1px #dfdfdf;
    display:flex;
`;
const MiniPhoto = styled.div`
    width: 100px;
    height: 100px;
    background-image: radial-gradient(lightgrey, #dfdfdf, grey);
`;
const PBCContainer = styled.div`
    width: calc(100% - 100px);
    box-sizing: border-box;
    margin: 4px;
    margin-bottom: 0px;
`;
const PBContent = styled.div`
    height: 70px;
    text-align: left;
`;
const PBInfo = styled.div`
    height: 20px;
    text-align: left;
    span{
        color: grey;
    }
`;
function LatestPublications() {
    return (
        <>
            <PhotoLeft>
                <div></div>
                <PhotoLeftDesc>
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz
                    w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez n
                    <div>
                       <span>7 jan 2020</span> [O] John Lock
                    </div> 
                </PhotoLeftDesc>              
            </PhotoLeft>
            <ContentRight>
                <span>Latest Publications</span>
                <PublicationBox>
                    <MiniPhoto></MiniPhoto>
                    <PBCContainer>
                       <PBContent>
                            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz
                            w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez n
                        </PBContent>
                       <PBInfo>
                           <span>7 jan 2020</span> [O] John Lock
                        </PBInfo>
                    </PBCContainer>
                    
                </PublicationBox>
                <PublicationBox>
                    <MiniPhoto></MiniPhoto>
                    <PBCContainer>
                       <PBContent>
                            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz
                            w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez n
                        </PBContent>
                       <PBInfo>
                           <span>7 jan 2020</span> [O] John Lock
                        </PBInfo>
                    </PBCContainer>
                    
                </PublicationBox>
                <PublicationBox>
                    <MiniPhoto></MiniPhoto>
                    <PBCContainer>
                       <PBContent>
                            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz
                            w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez n
                        </PBContent>
                       <PBInfo>
                           <span>7 jan 2020</span> [O] John Lock
                        </PBInfo>
                    </PBCContainer>
                    
                </PublicationBox>
                see more publications
            </ContentRight>
        </>
    )
}

export default LatestPublications
