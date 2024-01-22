import React from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function ClientCertificateTab() {
  return (
    <div className="flex justify-ends">
      <Button
        type="primary"
        icon={<UploadOutlined />}
        className="rounded-lg mr-1"
      >
        TEST CERT
      </Button>
      <Upload>
        <Button
          type="primary"
          icon={<UploadOutlined />}
          className="rounded-lg ml-1"
        >
          CLIENT CERT
        </Button>
      </Upload>
    </div>
  );
}
