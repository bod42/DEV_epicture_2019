package com.example.my_epicture;

import android.content.Intent;
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class home extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        Button buttonUploadImage = (Button)findViewById(R.id.button_to_log);
        buttonUploadImage.setOnClickListener(new Button.OnClickListener(){

            @Override
            public void onClick(View arg0) {
                // TODO Auto-generated method stub
               Intent i = new Intent(home.this, LogIn.class);
                startActivityForResult(i, 0);
                finish();
            }});
    }
}