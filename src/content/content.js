import React, {Component} from 'react';
import './content.css';

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isContent: true,
            newArr: []
        }
    }

    // componentWillMount() {
    //     this.content = JSON.parse(this.props.match.params.res)
    //     console.log(this.content)
    // }
    componentDidMount() {
        fetch('http://toutiao-ali.juheapi.com/toutiao/index?type=top',
            {
                method: 'GET',
                headers: {
                    Authorization: 'APPCODE 05fa610311bb4dbf97aeab0356fd218f'
                }
            }
        ).then((response) => response.json())
            .then((res) => {
                console.log(res.result.data)
                this.setState({
                    isContent: false,
                    newArr: res.result.data
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        // let a = this.content.result
        return (
            <div>
                {this.state.isContent ? <div><i className="fa fa-spinner fa-pulse" style={styles.loading}></i><h1 style={{marginLeft:'46%'}}>loading</h1></div> :
                    this.state.newArr.map((data) => {
                        return <div style={styles.parent} key={data.uniquekey}>
                            <img style={styles.img} src={data.thumbnail_pic_s} alt="图片没有来"/>
                            <div style={styles.right}>
                                <p style={styles.title}>
                                    <a href={data.url}>{data.title}</a>
                                </p>
                                <p>{data.author_name}</p>
                                <p>{data.date}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}
const styles = {
    parent: {
        width: '80%',
        height: '200px',
        marginLeft: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        border: '1px solid #3CB371',
        borderRadius: '10px',
        marginTop: '20px',
        marginBottom: '20px'
    },
    img: {
        width: '180px',
        height: '160px',
        marginLeft: '2%',
        marginTop: '20px'
    },
    right: {
        marginLeft: '6%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: '36px',
    },
    loading: {
        fontSize: '48px',
        marginLeft: '48%',
        marginTop:'140px'
    }
}
