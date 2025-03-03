import { Icon } from "@iconify/react";
import terraformIcon from "@iconify/icons-simple-icons/terraform";
import apacheSparkIcon from "@iconify/icons-simple-icons/apachespark";
import cIcon from "@iconify/icons-simple-icons/c";
import apacheParquetIcon from "@iconify/icons-simple-icons/apacheparquet";
import helmIcon from "@iconify/icons-simple-icons/helm";
import bashIcon from "@iconify/icons-simple-icons/gnubash";
import nextJsIcon from "@iconify/icons-simple-icons/nextdotjs";
import datadogIcon from "@iconify/icons-simple-icons/datadog";
import postgresIcon from "@iconify/icons-simple-icons/postgresql";
import mysqlIcon from "@iconify/icons-simple-icons/mysql";
import sqliteIcon from "@iconify/icons-simple-icons/sqlite";
import dynamodbIcon from "@iconify/icons-simple-icons/amazondynamodb";
import elasticsearchIcon from "@iconify/icons-simple-icons/elasticsearch";
import fluentdIcon from "@iconify/icons-simple-icons/fluentd";
import kibanaIcon from "@iconify/icons-simple-icons/kibana";
import rabbitmqIcon from "@iconify/icons-simple-icons/rabbitmq";
import rayIcon from "@iconify/icons-simple-icons/ray";
import airbyteIcon from "@iconify/icons-simple-icons/airbyte";
import firebaseIcon from "@iconify/icons-simple-icons/firebase";

const Skills = () => {
  return (
    <div className="skills-container">
        <h2>Skills</h2>
        {/* TODO: Can refactor this and use map() to render individual div elements for respective skills */}
        <div className="grid-skills">
            <div className="skill-card python">
                <i className="fa-brands fa-python python-icon"></i>
                <p>Python</p>
            </div>
            <div className="skill-card java">
                <i className="fa-brands fa-java java-icon"></i>
                <p>Java</p>
            </div>
            <div className="skill-card golang">
                <i className="fa-brands fa-golang golang-icon"></i>
                <p>Go</p>
            </div>
            <div className="skill-card c">
                <Icon icon={cIcon} className="icon c-icon" />
                <p>C</p>
            </div>
            <div className="skill-card php">
                <i className="fa-brands fa-php php-icon"></i>
                <p>PHP</p>
            </div>
            <div className="skill-card r-project">
                <i className="fa-brands fa-r-project r-project-icon"></i>
                <p>R</p>
            </div>
            <div className="skill-card js">
                <i className="fa-brands fa-js-square js-icon"></i>
                <p>JavaScript</p>
            </div>
            <div className="skill-card react">
                <i className="fa-brands fa-react react-icon"></i>
                <p>React</p>
            </div>
            <div className="skill-card next">
                <Icon icon={nextJsIcon} className="icon next-icon" />
                <p>Next.js</p>
            </div>
            <div className="skill-card bash">
                <Icon icon={bashIcon} className="icon gnu-bash-icon" />
                <p>Bash</p>
            </div>
            <div className="skill-card sql">
                <i className="fa-solid fa-database sql-icon"></i>
                <p>SQL</p>
            </div>
            <div className="skill-card aws">
                <i className="fa-brands fa-aws aws-icon"></i>
                <p>AWS</p>
            </div>
            <div className="skill-card kubernetes">
                <i className="fa-solid fa-dharmachakra kubernetes-icon"></i>
                <p>Kubernetes</p>
            </div>
            <div className="skill-card helm">
                <Icon icon={helmIcon} className="icon helm-icon" />
                <p>Helm</p>
            </div>
            <div className="skill-card docker">
                <i className="fa-brands fa-docker docker-icon"></i>
                <p>Docker</p>
            </div>
            <div className="skill-card terraform">
                <Icon icon={terraformIcon} className="icon terraform-icon" />
                <p>Terraform</p>
            </div>
            <div className="skill-card postgres">
                <Icon icon={postgresIcon} className="icon postgres-icon" />
                <p>PostgreSQL</p>
            </div>
            <div className="skill-card mysql">
                <Icon icon={mysqlIcon} className="icon mysql-icon" />
                <p>MySQL</p>
            </div>
            <div className="skill-card sqlite">
                <Icon icon={sqliteIcon} className="icon sqlite-icon" />
                <p>SQLite</p>
            </div>
            <div className="skill-card dynamodb">
                <Icon icon={dynamodbIcon} className="icon dynamodb-icon" />
                <p>DynamoDB</p>
            </div>
            <div className="skill-card firebase">
                <Icon icon={firebaseIcon} className="icon firebase-icon" />
                <p>Firebase</p>
            </div>
            <div className="skill-card rabbitmq">
                <Icon icon={rabbitmqIcon} className="icon rabbitmq-icon" />
                <p>RabbitMQ</p>
            </div>
            <div className="skill-card datadog">
                <Icon icon={datadogIcon} className="icon datadog-icon" />
                <p>Datadog</p>
            </div>
            <div className="skill-card elasticsearch">
                <Icon icon={elasticsearchIcon} className="icon elasticsearch-icon" />
                <p>Elasticsearch</p>
            </div>
            <div className="skill-card fluentd">
                <Icon icon={fluentdIcon} className="icon fluentd-icon" />
                <p>Fluentd</p>
            </div>
            <div className="skill-card kibana">
                <Icon icon={kibanaIcon} className="icon kibana-icon" />
                <p>Kibana</p>
            </div>
            <div className="skill-card spark">
                <Icon icon={apacheSparkIcon} className="icon apache-spark-icon" />
                <p>Apache Spark</p>
            </div>
            <div className="skill-card parquet">
                <Icon icon={apacheParquetIcon} className="icon apache-parquet-icon" />
                <p>Apache Parquet</p>
            </div>
            <div className="skill-card ray">
                <Icon icon={rayIcon} className="icon ray-icon" />
                <p>Ray</p>
            </div>
            <div className="skill-card airbyte">
                <Icon icon={airbyteIcon} className="icon airbyte-icon" />
                <p>Airbyte</p>
            </div>
            <div className="skill-card git">
                <i className="fa-brands fa-git git-icon"></i>
                <p>Git</p>
            </div>
            <div className="skill-card linux">
                <i className="fa-brands fa-linux linux-icon"></i>
                <p>Linux</p>
            </div>
        </div>
    </div>
  );
}

export default Skills;